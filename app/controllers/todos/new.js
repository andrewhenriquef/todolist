import Ember from 'ember';

export default Ember.Controller.extend({

    actions:{
        
        addTodo: function(){
            var date = this.get('date');
            var title = this.get('title');
            var body = this.get('body');

            //create new todo

            var newTodo = this.store.createRecord('todo',{
                title: title,
                body: body,
                date: new Date(date)
            });

            //save To FireBase
            newTodo.save();
            //clear the form
            this.setProperties({
                title: '',
                body: '',
                date: ''
            });

        }

    }

});
