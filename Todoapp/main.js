window.addEventListener('load',()=>{
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const task = input.value;
        if(!task)
        {
            alert('please enter a task');
            return
        }

        const task_el = document.createElement('div');
        task_el.classList.add("task")

        const task_el_content = document.createElement('div')
        task_el_content.classList.add('content')



        task_el.appendChild(task_el_content)

        const task_inpt_el = document.createElement('input')
        task_inpt_el.type = 'text'
        task_inpt_el.classList.add('text')
        task_inpt_el.value = task
        task_inpt_el.setAttribute("readonly","readonly")

        task_el_content.appendChild(task_inpt_el)

        const task_action_el = document.createElement('div')
        task_action_el.classList.add('actions')

        const task_edit = document.createElement('button')
        task_edit.classList.add('edit')
        task_edit.innerHTML = "Edit"

        const task_delete = document.createElement('button')
        task_delete.classList.add('delete')
        task_delete.innerHTML = 'Delete'

        task_action_el.appendChild(task_edit);
        task_action_el.appendChild(task_delete)

        task_el.appendChild(task_action_el)

        list_el.appendChild(task_el)

        input.value = ""

        task_edit.addEventListener('click',()=>{
           if(task_edit.innerText.toLowerCase()  == "edit")
           {
            task_inpt_el.removeAttribute("readonly");
            task_inpt_el.focus()
            task_edit.innerText = "Save"
           }
           else{
            task_inpt_el.setAttribute('readonly','readonly')
            task_edit.innerText = "Edit"
           }
        })

        task_delete.addEventListener('click',()=>{
            list_el.removeChild(task_el)
        })
       

    })

})
