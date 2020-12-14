
<template>
  <div class="firebase container">
    <h2 class="text-white">Welcome to Home Page</h2>
    <div class="button btn btn-danger" @click="submitPushTodo()">ทดสอบอัพเดท databse</div>
    <ul class="list-group">
        <div v-for="(todo,index) in todos" :key="index">
          <li class="list-group-item">{{todo.name}}</li>
        </div>
    </ul>
  </div>
</template>

<script>
import { todosRef } from '../firebase'
import Swal from 'sweetalert2'

export default {
  name: 'firebase',
  components: {
  },
  data: () => ({
    todos: ['']
  }),
  methods: {
    submitPushTodo(){
      todosRef.push({name:'Test Task', completed: false})
        .then(()=>{
          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }).catch(()=>{
          Swal.fire({
            title: 'Fail!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        })
    }
  },
  mounted () {
    todosRef.on('value', (snapshot) => {
      this.todos = snapshot.val()
    })
  }
}

</script>
