import { route } from 'react-router-typesafe-routes/dom'

const ROUTES = {
  INDEX: route('', undefined, {
    ADD_TASK: route('add_task'),
  }),
  CREATE_TEMPLATE: route('create_template', undefined),
}

export default ROUTES
