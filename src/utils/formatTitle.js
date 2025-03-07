export const formatTitleForURL = (title) => {
  // Ubah spasi menjadi tanda hubung (-) tanpa menghapus karakter khusus
  return title
    .toLowerCase() // Ubah ke huruf kecil
    .replace(/\s+/g, "-"); // Ganti spasi dengan tanda hubung
};
