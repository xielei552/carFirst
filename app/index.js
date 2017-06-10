import _ from 'lodash';
import 'babel-polyfill';
import $ from 'jquery';
import vue from '../js/vue.js';
import script from '../js/script.js';

function component () {
      var element = document.createElement('div');

        /* lodash is required for the next line to work */
        element.innerHTML = _.join(['Hello','webpack'], ' ');

          return element;
}

document.body.appendChild(component());
