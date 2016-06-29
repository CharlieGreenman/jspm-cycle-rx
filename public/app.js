import moment from 'moment';
import _ from 'lodash';

const date = moment().format();

/*eslint-disable */
import './scss/main.scss!';

_.forEach(date, char => console.log(char));
