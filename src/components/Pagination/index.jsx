import styles from "./Pagination.module.scss";
import Button from "./components/Button";
import PropTypes from "prop-types";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
function Pagination({ firstPage, currentPage, totalPages, onPageChange }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigateEdgeBtn}>
        <Button
          onClick={() => onPageChange(--currentPage)}
          isDisabled={currentPage === firstPage}
        >
          <GrFormPrevious className={styles.icon} />
        </Button>
        <Button
          onClick={() => onPageChange(firstPage)}
          isDisabled={currentPage === firstPage}
        >
          First
        </Button>
      </div>

      <div className={styles.pages}>
        {Array(totalPages)
          .fill(null)
          .map((_, index) => {
            const pageNumber = index + 1;
            const isActive = currentPage === pageNumber;

            return (
              <li
                className={isActive ? styles.active : ""}
                key={index}
                onClick={() => {
                  onPageChange(pageNumber);
                }}
              >
                {pageNumber}
              </li>
            );
          })}
      </div>

      <div className={styles.navigateStepBtn}>
        <Button
          onClick={() => onPageChange(totalPages)}
          isDisabled={currentPage === totalPages}
        >
          Last
        </Button>
        <Button
          onClick={() => onPageChange(++currentPage)}
          isDisabled={currentPage === totalPages}
        >
          <GrFormNext className={styles.icon} />
        </Button>
      </div>
    </div>
  );
}
Pagination.prototype = {
  firstPage: PropTypes.number,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
export default Pagination;
