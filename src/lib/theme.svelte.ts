import { browser } from "$app/environment";

class ThemeManager {
    current = $state<'dark' | 'light'>('dark');

    constructor() {
        if (browser) {
            const saved = localStorage.getItem('theme') as 'dark' | 'light';
            const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.current = saved || (preferDark ? 'dark' : 'light');
            this.apply();
        }
    }

    toggle() {
        this.current = this.current === 'dark' ? 'light' : 'dark';
        if(browser) {
            localStorage.setItem('theme', this.current);
            this.apply();
        }
    }

    private apply() {
        if(this.current === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}

export const theme = new ThemeManager();