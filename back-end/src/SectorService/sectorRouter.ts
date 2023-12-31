
import express from 'express';
import {

  createSector,
  getAllSectors,
  getSectorById,
  updateSector,
  deleteSectorById,
  createSectorUsingParentName,
  getRootSectors,
  getFullSectorGraph
} from "./sectorController"

const router = express.Router();

router.get('/sectors/root', getRootSectors);
router.get('/sectors/full_graph', getFullSectorGraph);
router.get('/sectors', getAllSectors);
router.get('/sectors/:id', getSectorById);
router.post('/sectors', createSector);
router.put('/sectors/:id', updateSector);
router.delete('/sectors/:id', deleteSectorById);
router.post('/sectors/parent_name', createSectorUsingParentName);



export default router;

