import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions: {
        editTodo: function(id){
            var self = this;
            var title = this.get('model.title');
            var body = this.get('model.body');
            var date = this.get('model.date');

            this.store.findRecord('todo' ,id).then(function(todo){
                todo.set('title', title);
                todo.set('body', body);
                todo.set('date', new Date(date));

                // save to Firebase
                todo.save();
                //redirect route
                self.transitionToRoute('todos');

            });
        },
            deleteTodo: function(id){
            
            this.store.findRecord('todo' ,id).then(function(todo){
                todo.destroyRecord();
                self.transitionToRoute('todos');

            });
        
        }
    }

});
