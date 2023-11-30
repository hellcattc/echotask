import { number, route } from 'react-router-typesafe-routes/dom'

const ROUTES = {
  INDEX: route('', undefined, {
    ADD_TASK: route('add_task'),
    EDIT_TASK: route('edit_task/:id', { params: { id: number().defined() } }),
  }),
  CREATE_TEMPLATE: route('create_template', undefined),
}

export default ROUTES
