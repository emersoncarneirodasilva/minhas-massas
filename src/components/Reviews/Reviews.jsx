import styles from "./Reviews.module.scss";
import Review from "./Review";

const Reviews = ({ reviews }) => {
  const renderReviews = reviews.map((review) => (
    <Review
      key={review._id}
      image={review.image}
      name={review.name}
      review={review.review}
    />
  ));

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.heading}>
        <span>Depoimentos</span>
        <h2>Dos nossos clientes</h2>
      </div>

      <div className={styles.content}>{renderReviews}</div>
    </section>
  );
};

export default Reviews;
