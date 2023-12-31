import { Request, Response } from 'express';
import sectorRepository from './sectorRepository';

async function createSector(req: Request, res: Response) {
  const { name, parent } = req.body;
  try {

    if (!name) {
      res.status(400).json({ error: "Name is required" });
      return
    }

    const sector = await sectorRepository.createSector(name, parent);
    res.json(sector);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

async function createSectorUsingParentName(req: Request, res: Response) {
  const { name, parentName } = req.body;
  try {
    if (!name) {
      // return bad request status code
      res.status(400).json({ error: "name and name are required" });
      return
    }
    if (!parentName) {
      const sector = await sectorRepository.createSector(name, "");
      res.json(sector);
      return
    }


    const parent = await sectorRepository.getSectorByName(parentName) as any;
    if (parent) {
      const parent_id = parent._id;
      const sector = await sectorRepository.createSector(name, parent_id);
      res.json(sector);
    } else {
      res.status(404).json({ error: "Parent not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllSectors(req: Request, res: Response) {
  try {
    const sectors = await sectorRepository.getAllSectors();
    res.json(sectors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

async function getRootSectors(req: Request, res: Response) {
  try {
    const sectors = await sectorRepository.getRootSectors();
    res.json(sectors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

async function getFullSectorGraph(req: Request, res: Response) {
  try {
    const sectors = await sectorRepository.getFullSectorGraph();
    res.json(sectors);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


async function getSectorById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const sector = await sectorRepository.getSectorById(id);
    if (!sector) {
      res.status(404).json({ error: "Sector not found" });
      return
    }
    res.json(sector);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


async function updateSector(req: Request, res: Response) {
  const { id } = req.params;
  const { name, parent } = req.body;
  try {
    const updatedSector = await sectorRepository.updateSector(id, name, parent);
    res.json(updatedSector);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

async function deleteSectorById(req: Request, res: Response) {
  const { id } = req.params;
  try {

    const sector = await sectorRepository.getSectorById(id);
    if (!sector) {
      res.status(404).json({ error: "Sector not found" });
      return
    }

    if (sector && sector.children && sector.children.length > 0) {
      res.status(400).json({ error: "Sector has children" });
      return
    }

    await sectorRepository.deleteSectorById(id);
    res.json({ message: 'Sector deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createSector,
  createSectorUsingParentName,
  getAllSectors,
  getSectorById,
  updateSector,
  deleteSectorById,
  getRootSectors,
  getFullSectorGraph,
};
