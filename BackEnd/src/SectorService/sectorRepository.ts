// src/sectorRepository.ts

import mongoose, { Types } from 'mongoose';
import { Sector, ISector } from './sectorModel';


async function createSector(name: string, parentId: string) {

  const sector = new Sector({
    name: name,
    parent: parentId ? new mongoose.mongo.ObjectId(parentId) : null,
  });

  await sector.save();

  if (parentId) {
    let parent_Id = new mongoose.mongo.ObjectId(parentId);
    const parent = await Sector.findById(parent_Id);
    if (parent) {
      await Sector.findByIdAndUpdate(parent, { $push: { children: sector._id } });
    }
  }


  return sector;
};



async function getAllSectors() {
  return await Sector.find().populate('children');
};
async function getRootSectors() {
  return await Sector.find({ parent: null }).populate('children');
}

async function getSectorById(id: string) {
  return await Sector.findById(id).populate('children');
};

async function getFullSectorGraph() {
  // four layer popluation object
  let populateObject = {
    path: 'children',
    populate: {
      path: 'children',
      populate: {
        path: 'children',
        populate: {
          path: 'children',
          populate: {
            path: 'children',
          }
        }
      }
    }
  }
  return await Sector.find({ parent: null }).populate(populateObject);
}

async function updateSector(id: string, name: string, parent?: Types.ObjectId | ISector) {
  return await Sector.findByIdAndUpdate(
    id,
    { name, parent },
    { new: true, useFindAndModify: false }
  ).populate('children');
};

async function deleteSectorById(id: string) {
  // don't delte if it has children
  const sector = await Sector.findById(id);
  // remove it from parents children
  if (sector && sector.parent) {
    const parent = await Sector.findById(sector.parent);
    if (parent) {
      await parent.updateOne({ $pull: { children: sector._id } });
    }
  }

  return await Sector.findByIdAndDelete(id, { useFindAndModify: false });
};

async function getSectorByName(name: string) {
  return await Sector.findOne({ name: name }).populate('children');
}


const sectorReposiory = {
  createSector,
  getAllSectors,
  getSectorById,
  updateSector,
  deleteSectorById,
  getSectorByName,
  getRootSectors,
  getFullSectorGraph
};

export default sectorReposiory;
