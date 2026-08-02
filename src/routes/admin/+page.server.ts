import { dev } from "$app/environment";
import { error, fail } from "@sveltejs/kit";
// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";
import type { PageServerLoad, Actions } from "./$types";

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { title: "", description: "", date: "", lang: "ID", content: raw };
  }

  const frontmatterStr = match[1];
  const content = match[2];

  const getField = (key: string) => {
    const m = frontmatterStr.match(new RegExp(`${key}:\\s*"?(.*?)"?\\r?$`, "m"));
    return m ? m[1] : "";
  };

  return {
    title: getField("title"),
    description: getField("description"),
    date: getField("date"),
    lang: getField("lang") || "ID",
    content
  };
}

export const load: PageServerLoad = async () => {
  if (!dev) {
    throw error(404, "Page not found");
  }

  // Read existing Projects
  const projectsPath = path.resolve("src/lib/data/projects.json");
  let projects = [];
  try {
    projects = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));
  } catch (e) {}

  // Read existing Notes
  const notesPath = path.resolve("src/lib/data/notes.json");
  let notes = [];
  try {
    notes = JSON.parse(fs.readFileSync(notesPath, "utf-8"));
  } catch (e) {}

  // Read existing Blog Posts
  const postsDir = path.resolve("src/lib/posts");
  let posts: any[] = [];
  try {
    const files = fs.readdirSync(postsDir);
    posts = files
      .filter((file: string) => file.endsWith(".md"))
      .map((file: string) => {
        const rawContent = fs.readFileSync(path.join(postsDir, file), "utf-8");
        const parsed = parseFrontmatter(rawContent);
        const slug = file.replace(/\.md$/, "");
        return {
          slug,
          title: parsed.title || slug,
          description: parsed.description || "",
          date: parsed.date || "",
          lang: parsed.lang || "ID",
          content: parsed.content
        };
      });
  } catch (e) {}

  return {
    projects,
    notes,
    posts
  };
};

export const actions: Actions = {
  addProject: async ({ request }) => {
    if (!dev) throw error(404, "Page not found");
    const formData = await request.formData();
    const title = formData.get("title")?.toString().trim();
    const description = formData.get("description")?.toString().trim();
    const tagsStr = formData.get("tags")?.toString().trim() || "";
    const github = formData.get("github")?.toString().trim() || "";
    const demo = formData.get("demo")?.toString().trim() || "";
    let image = formData.get("image")?.toString().trim() || "";

    const imageFile = formData.get("imageFile") as File | null;

    if (!title || !description) {
      return fail(400, { error: "Judul dan deskripsi proyek wajib diisi." });
    }

    if (imageFile && imageFile.size > 0) {
      const ext = path.extname(imageFile.name) || ".jpg";
      const safeName = `project_${Date.now()}${ext}`;
      const uploadPath = path.resolve("static", safeName);
      const uint8 = new Uint8Array(await imageFile.arrayBuffer());
      fs.writeFileSync(uploadPath, uint8);
      image = `/${safeName}`;
    }

    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const tags = tagsStr
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const newProject = { id, title, description, tags, image, github, demo };

    const filePath = path.resolve("src/lib/data/projects.json");
    try {
      const existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      existing.unshift(newProject);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
      return { success: true, message: `Proyek "${title}" berhasil ditambahkan!` };
    } catch (e: any) {
      return fail(500, { error: `Gagal menyimpan proyek: ${e.message}` });
    }
  },

  deleteProject: async ({ request }) => {
    if (!dev) throw error(404, "Page not found");
    const formData = await request.formData();
    const id = formData.get("id")?.toString();

    if (!id) return fail(400, { error: "ID proyek tidak valid." });

    const filePath = path.resolve("src/lib/data/projects.json");
    try {
      const existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const filtered = existing.filter((p: any) => p.id !== id);
      fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2), "utf-8");
      return { success: true, message: "Proyek berhasil dihapus!" };
    } catch (e: any) {
      return fail(500, { error: `Gagal menghapus proyek: ${e.message}` });
    }
  },

  addNote: async ({ request }) => {
    if (!dev) throw error(404, "Page not found");
    const formData = await request.formData();
    const title = formData.get("title")?.toString().trim();
    const date = formData.get("date")?.toString().trim() || new Date().toISOString().split("T")[0];
    const lang = formData.get("lang")?.toString().trim() || "ID";
    const tagsStr = formData.get("tags")?.toString().trim() || "";

    if (!title) {
      return fail(400, { error: "Judul catatan wajib diisi." });
    }

    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const tags = tagsStr
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const newNote = { id, title, date, lang, tags };

    const filePath = path.resolve("src/lib/data/notes.json");
    try {
      const existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      existing.unshift(newNote);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
      return { success: true, message: `Catatan TIL "${title}" berhasil ditambahkan!` };
    } catch (e: any) {
      return fail(500, { error: `Gagal menyimpan catatan: ${e.message}` });
    }
  },

  deleteNote: async ({ request }) => {
    if (!dev) throw error(404, "Page not found");
    const formData = await request.formData();
    const id = formData.get("id")?.toString();

    if (!id) return fail(400, { error: "ID catatan tidak valid." });

    const filePath = path.resolve("src/lib/data/notes.json");
    try {
      const existing = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const filtered = existing.filter((n: any) => n.id !== id);
      fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2), "utf-8");
      return { success: true, message: "Catatan TIL berhasil dihapus!" };
    } catch (e: any) {
      return fail(500, { error: `Gagal menghapus catatan: ${e.message}` });
    }
  },

  addPost: async ({ request }) => {
    if (!dev) throw error(404, "Page not found");
    const formData = await request.formData();
    const title = formData.get("title")?.toString().trim();
    const description = formData.get("description")?.toString().trim() || "";
    const content = formData.get("content")?.toString() || "";
    const date = formData.get("date")?.toString().trim() || new Date().toISOString().split("T")[0];
    const lang = formData.get("lang")?.toString().trim() || "ID";

    if (!title || !content) {
      return fail(400, { error: "Judul dan isi artikel blog wajib diisi." });
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const markdownContent = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
date: "${date}"
lang: "${lang}"
published: true
---

${content}
`;

    const filePath = path.resolve(`src/lib/posts/${slug}.md`);
    try {
      fs.writeFileSync(filePath, markdownContent, "utf-8");
      return { success: true, message: `Artikel blog "${title}" berhasil disimpan!` };
    } catch (e: any) {
      return fail(500, { error: `Gagal membuat artikel blog: ${e.message}` });
    }
  },

  deletePost: async ({ request }) => {
    if (!dev) throw error(404, "Page not found");
    const formData = await request.formData();
    const slug = formData.get("slug")?.toString();

    if (!slug) return fail(400, { error: "Slug artikel tidak valid." });

    const filePath = path.resolve(`src/lib/posts/${slug}.md`);
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      return { success: true, message: "Artikel blog berhasil dihapus!" };
    } catch (e: any) {
      return fail(500, { error: `Gagal menghapus artikel blog: ${e.message}` });
    }
  }
};
