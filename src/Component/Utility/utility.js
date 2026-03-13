import { toast } from "react-toastify";

/* -------- READ LIST -------- */

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }
  return [];
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    toast.error("Book already added to Read List");
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
    toast.success("Book added to Read List 📚");
  }
};

/* -------- WISH LIST -------- */

const getWishList = () => {
  const storedWishSTR = localStorage.getItem("wishList");

  if (storedWishSTR) {
    return JSON.parse(storedWishSTR);
  }
  return [];
};

const addToWishList = (id) => {
  const storedWishData = getWishList();

  if (storedWishData.includes(id)) {
    toast.error("Book already in Wish List");
  } else {
    storedWishData.push(id);
    localStorage.setItem("wishList", JSON.stringify(storedWishData));
    toast.success("Book added to Wish List ⭐");
  }
};

export { addToStoredDB, getStoredBook, addToWishList, getWishList };