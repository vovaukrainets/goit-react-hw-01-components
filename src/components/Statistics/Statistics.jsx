import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 ? <h2 className={css.title}>{title}</h2> : ''}
      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              style={{
                backgroundColor: randomColor(),
              }}
              key={id}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage + '%'}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
