import myDatabase from "../config/db.js";
const result = await myDatabase.pool.query("SELECT * FROM feedback");
var feedbacks = result[0];

const addFeedback = (feedback) => {
  const feedbackCategory = feedback.categoryLabel;
  //console.log(mycraveUseClass);
  const feedbackCategoryId = feedback.categoryId;
  const myUserId = feedback.cuserId;
  const description = feedback.description;
  // console.log(mycraveUse);
  // console.log(myUserId);
  myDatabase.pool.query(
    "INSERT INTO feedback (category_label, description, user_id) VALUES (?, ?, ?)",
    [feedbackCategory, description, myUserId],
    function (err, result) {
      if (err) throw err;
      console.log("Inserted Successfully!" + result.affectedRows);
    }
  );
};

const getFeedback = feedbacks;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

export default { getFeedback, addFeedback };
