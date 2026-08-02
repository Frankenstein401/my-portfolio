<script lang="ts">
  // About Page
</script>

<svelte:head>
  <title>Tentang — Abdul Gani Hadiansyah</title>
</svelte:head>

<section class="max-w-3xl mx-auto py-8 px-4 sm:px-6 relative z-10">
  <h1 class="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
    Tentang Saya
  </h1>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
    <!-- Left Column: Content Text -->
    <div
      class="md:col-span-7 space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-[14px]"
    >
      <p>
        Halo! Saya Abdul Gani Hadiansyah, seorang siswa RPL dari SMKN 12
        Jakarta. Fokus utama saya adalah menjadi seorang <strong
          >pengembang backend (backend developer)</strong
        >.
      </p>

      <p>
        Minat saya pada dunia pemrograman lahir sejak memutuskan masuk sekolah
        SMK jurusan komputer. Berbekal semangat belajar yang tinggi, saya selalu
        antusias mengikuti perkembangan arus teknologi.
      </p>

      <p class="border-l-2 border-zinc-400 dark:border-zinc-600 pl-4 italic">
        "Talk is cheap. Show me the code." — Linus Torvalds
      </p>

      <p>
        Kutipan dari pencipta Linux tersebut menyadarkan saya bahwa di dunia
        pemrograman, kerja keras dan eksekusi nyata adalah hal yang paling
        berharga. Karena itu, saya sangat senang berdiskusi, berkolaborasi, dan
        belajar bersama—demi mencapai tujuan yang bukan sekadar <em>"bicara"</em
        >, tapi juga <em>"tunjukkan kodenya"</em>.
      </p>

      <p>
        Di luar dunia pemrograman, saya juga menikmati hobi bermain game,
        berolahraga (lari dan voli), serta membaca.
      </p>
      <hr class="w-[50%] text-center mx-auto text-zinc-400 my-6" />
      <p>
        Jika kamu tertarik berdiskusi, ngobrol, dan berkolaborasi seputar proyek
        dan dunia pemrograman, silakan berkunjung ke <strong
          ><a
            href="https://github.com/abdulganihadiansyah"
            target="_blank"
            rel="noopener noreferrer">GitHub</a
          ></strong
        > saya!
      </p>
    </div>

    <!-- Right Column: Profile Photo -->
    <div class="md:col-span-5 flex justify-center md:justify-end pt-4">
      <div class="relative max-w-xs w-full group">
        <!-- Frame Foto Utama -->
        <div
          class="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/90 shadow-xl bg-white dark:bg-zinc-900"
        >
          <img
            src="/profile.webp"
            alt="Abdul Gani Hadiansyah"
            class="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</section>
