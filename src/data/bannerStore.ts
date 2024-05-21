import { persisted } from "svelte-persisted-store";

// Save if the banner is hidden to sessionstorage
export const bannerShownSessionStore = persisted("bannerShown", "yes", {
	storage: "session"
});

// Save a count of how many times the banner has been hidden to local storage
export const bannerHiddenCountStore = persisted("bannerHiddenCount", "0");
