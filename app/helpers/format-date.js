import Ember from 'ember';

export function formatDate(params){
    return moment(params[0]).format('[Date: ]MM-DD');
}

export default Ember.Helper.helper(formatDate);