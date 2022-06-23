export const FormatTags = (tag: string) => {
  const tagFormat = '#' + tag
  return tagFormat
}

export const firstUpper = (value: string) => {
  return value.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  }
  );
}