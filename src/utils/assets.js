const base = import.meta.env.BASE_URL

export function img(path) {
  return `${base}images/${path}`
}
