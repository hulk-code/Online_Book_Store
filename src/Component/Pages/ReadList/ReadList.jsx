import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { getStoredBook, getWishList } from "../../Utility/utility";
import MyBook from "../MyBook/MyBook";
import WishList from "../WishList/WishList";

const ReadList = () => {

  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const data = useLoaderData();

  useEffect(() => {

    const storedRead = getStoredBook();
    const convertedRead = storedRead.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedRead.includes(book.bookId)
    );

    setReadList(myReadList);

    const storedWish = getWishList();
    const convertedWish = storedWish.map((id) => parseInt(id));

    const myWishList = data.filter((book) =>
      convertedWish.includes(book.bookId)
    );

    setWishList(myWishList);

  }, [data]);

  return (
    <div>

      <Tabs>

        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readList.map((book) => (
              <MyBook key={book.bookId} singleBook={book} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            {wishList.map((book) => (
              <WishList key={book.bookId} singleBook={book} />
            ))}
          </div>
        </TabPanel>

      </Tabs>

    </div>
  );
};

export default ReadList;