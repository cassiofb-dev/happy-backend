import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

// TESTS ROUTES SHOULD BE DELETED

routes.get('/', (request, response) => {
  const log = {
    "query params": request.query,
    "route params": request.params,
    "body": request.body,
  };

  return response.status(418).json({
    message: "Happy REST API: Tudo O.K.",
    respose: log,
  });
});

routes.get('/test/:param', (request, response) => {
  const log = {
    "query params": request.query,
    "route params": request.params,
    "body": request.body,
  };

  return response.status(418).json({
    message: "debug route",
    respose: log,
  });
});

// END TEST ROUTE

export default routes;
