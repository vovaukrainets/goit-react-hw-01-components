import css from 'components/TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
  <table className={css.th}>
    <thead>
      <tr className={css.th__list}>
        <th className={css.th__list}>Type</th>
        <th className={css.th__list}>Amount</th>
        <th className={css.th__list}>Currency</th>
      </tr>
    </thead>
    {items.map(({ id, type, amount, currency }) => (
      <tbody key={id} className={css.line}>
        <tr>
          <td className={css.th__item}>{type}</td>
          <td className={css.th__item}>{amount}</td>
          <td className={css.th__item}>{currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
