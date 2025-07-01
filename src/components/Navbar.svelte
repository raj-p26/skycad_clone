<script lang="ts">
  import { browser } from "$app/environment";
  import { themeStore } from "../stores/theme-store";

  let openMenu = $state(false);

  if (browser) {
    if (localStorage.darkMode === "on") {
      themeStore.set("dark");
      document.querySelector("html")?.classList.add("dark");
    } else {
      themeStore.set("light");
      document.querySelector("html")?.classList.remove("dark");
    }
  }

  let resizeHandler = (_event: UIEvent) => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 720) openMenu = false;
  };

  function toggleTheme() {
    if ($themeStore === "dark") {
      themeStore.set("light");
      localStorage.removeItem("darkMode");
      document.querySelector("html")?.classList.remove("dark");
    } else {
      themeStore.set("dark");
      localStorage.setItem("darkMode", "on");
      document.querySelector("html")?.classList.add("dark");
    }
  }
</script>

<svelte:window onresize={resizeHandler} />

<nav
  class="fixed top-0 left-0 right-0 py-6 sm:py-2 bg-surface text-on-surface dark:bg-surface-dark dark:text-on-surface-dark shadow-md"
>
  <div class="flex item-center justify-between container mx-auto">
    <div class="brand-name text-[20px] flex items-center gap-2">
      <div class="sm:hidden">
        <button
          class="flex items-center cursor-pointer pl-4"
          aria-labelledby="menu-btn"
          onclick={() => (openMenu = true)}
        >
          <span class="material-symbols-outlined size-6" id="menu-btn">
            menu
          </span>
        </button>
      </div>
      <a href="/">SkyCAD</a>
    </div>
    {#if openMenu}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="fixed inset-0 bg-scrim/40 z-50"
        onclick={() => (openMenu = false)}
      ></div>
    {/if}
    <div
      class={[
        "fixed sm:static z-[1000] top-0 left-0 bottom-0 max-w-[360px] sm:max-w-[100%] w-[100%] sm:w-fit transition sm:transition-none sm:translate-x-[0%] rounded-r-3xl bg-surface-container-low text-on-surface dark:bg-surface-container-low-dark dark:text-on-surface-dark sm:bg-surface dark:sm:bg-surface-dark",
        openMenu ? "translate-x-[0%]" : "translate-x-[-100%]",
      ]}
    >
      <ul
        class="sm:flex sm:gap-4 h-full sm:h-fit mt-8 sm:mt-0 sm:items-center sm:justify-evenly sm:static sm:px-0 px-4"
      >
        <li class="sm:hidden flex items-center justify-between">
          <h2 class="text-xl font-bold">SkyCAD</h2>
          <button
            aria-label="close"
            class="cursor-pointer"
            onclick={() => (openMenu = false)}
          >
            <span class="material-symbols-outlined"> close </span>
          </button>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center h-14 px-6 rounded-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center h-14 px-6 rounded-full"
          >
            Printers
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center h-14 px-6 rounded-full"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex items-center justify-center h-14 px-6 rounded-full"
          >
            Filament
          </a>
        </li>
        <li>
          <button
            class="cursor-pointer flex size-10 items-center justify-center rounded-full"
            onclick={toggleTheme}
            aria-label="toggle theme"
          >
            <span
              class="block size-6 material-symbols-outlined text-on-surface-variant dark:text-on-surface-variant-dark"
            >
              {$themeStore === "dark" ? "light_mode" : "bedtime"}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
