import moment from "moment";
import _ from "lodash";

let date = moment().format();

import './scss/main.scss!';

_.forEach(date, char => console.log(char));
