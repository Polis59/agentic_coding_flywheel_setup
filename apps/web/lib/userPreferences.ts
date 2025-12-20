/**
 * User Preferences Storage
 *
 * Handles localStorage persistence of user choices during the wizard.
 */

export type OperatingSystem = "mac" | "windows";

const OS_KEY = "acfs-user-os";

/**
 * Get the user's selected operating system from localStorage.
 */
export function getUserOS(): OperatingSystem | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(OS_KEY);
  if (stored === "mac" || stored === "windows") {
    return stored;
  }
  return null;
}

/**
 * Save the user's operating system selection to localStorage.
 */
export function setUserOS(os: OperatingSystem): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(OS_KEY, os);
}

/**
 * Detect the user's OS from the browser's user agent.
 * Returns null if detection fails or on server-side.
 */
export function detectOS(): OperatingSystem | null {
  if (typeof window === "undefined") return null;

  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "mac";
  if (ua.includes("win")) return "windows";
  return null;
}
