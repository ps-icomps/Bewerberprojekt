import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';

import Styles from './ArrayInvert.module.css';
import routes from "../../../routes";

const Strings = {
  TITLE: '2) Array invertieren',
  TASK: 'Invertiere ein Array manuell (ohne z.B. .reverse oder ähnlichem) zunächst mit Verwendung eines zweiten Arrays und dann ohne.',
  ARRAY: 'Ausgangsarray',
  ARRAY_WITH_ARRAY: 'Invertiertes Array mit Hilfsarray',
  ARRAY_WITHOUT_ARRAY: 'Invertiertes Array ohne Hilfsarray',
}

const ArrayInvert = ({ array, arrayWithHelperArray, arrayWithoutHelperArray}) => {
  return (
    <Task
      route={routes.Tasks.arrayInverter}
      task={Strings.TASK}
      title={Strings.TITLE}
    >
      <div className={Styles.root}>
        <div className={Styles.title}>{`${Strings.ARRAY}: ${array.join(',')}`}</div>
        <div className={Styles.solution}>
          <div className={Styles.container}>
            <div>
              <div className={Styles.title}>{`${Strings.ARRAY_WITH_ARRAY}: ${arrayWithHelperArray.join(',')}`}</div>
            </div>
          </div>
          <div className={Styles.container}>
            <div>
              <div className={Styles.title}>{`${Strings.ARRAY_WITHOUT_ARRAY}: ${arrayWithoutHelperArray.join(',')}`}</div>
            </div>
          </div>
        </div>
      </div>
    </Task>
  );
};

ArrayInvert.propTypes = {
  array: PropTypes.array.isRequired,
  arrayWithHelperArray: PropTypes.array.isRequired,
  arrayWithoutHelperArray: PropTypes.array.isRequired,
};

export default ArrayInvert;
