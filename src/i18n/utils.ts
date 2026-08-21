import { defaultLang, ui, type Lang, type UiKey } from './ui';

/** Reads the active locale out of the current URL, e.g. /de/ -> "de". */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

/** Returns a `t(key)` lookup bound to the given locale, falling back to the default. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefixes a path with the locale, except for the default locale. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

/** Picks the right translation off a `{ en, de }` content-collection field. */
export function pick(field: Record<string, string>, lang: Lang): string {
  return field[lang] ?? field[defaultLang];
}
