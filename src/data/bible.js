import chapterCounts from "./books_chapter_count.json";

// auto-import ALL JSON files in folder
const modules = import.meta.glob("./*.json", { eager: true });

// convert chapter list → map
const chapterCountMap = Object.fromEntries(chapterCounts);

// helper
function formatBook(bookData, id) {
  const verses = {};

  bookData.chapters.forEach((chapter) => {
    verses[chapter.chapter] = chapter.verses;
  });

  return {
    id,
    name: bookData.book,
    chapters: chapterCountMap[bookData.book],
    verses
  };
}

// 📖 BOOK ORDER (IMPORTANT FIX)
const bookOrder = chapterCounts.map(([name]) => name);

// build bible in correct order
export const bibleData = bookOrder
  .map((name, index) => {
    const module = Object.values(modules).find(
      (m) => m.default.book === name
    );

    if (!module) return null;

    return formatBook(module.default, index + 1);
  })
  .filter(Boolean);