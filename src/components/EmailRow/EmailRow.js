import React from 'react';
import styles from './EmailRow.module.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';
import { auth } from '../../firebase';

function EmailRow({
  id,
  title,
  subject,
  description,
  time,
  read,
  to,
  from,
  spam,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
        read,
        to,
        from,
        spam,
      }),
    );
    history.push('/mail');
  };
  const rowColor = read ? 'white' : 'rgb(221, 221, 221)';
  const sentValname = 'To: ' + to;
  const inboxOrSent =
    from === auth.currentUser.email && to !== auth.currentUser.email
      ? sentValname
      : title;
  return (
    <div
      onClick={openMail}
      className={styles.emailRow}
      style={{ backgroundColor: rowColor }}
    >
      <div className={styles.emailRow__options}></div>

      <h3 className={styles.emailRow__title}>{inboxOrSent}</h3>

      <div className={styles.emailRow__message}>
        <h4>
          {' '}
          {'  '} {subject}{' '}
          <span className={styles.emailRow__description}>
            {' '}
            - {description.replace(/<[^>]+>/g, '').substring(0, 30)}...
          </span>
        </h4>
      </div>

      <p className={styles.emailRow__description}>{time}</p>
    </div>
  );
}

export default EmailRow;
