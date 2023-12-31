import { Document, model, Schema, Types } from 'mongoose';

interface ISector extends Document {
  name: string;
  parent?: Types.ObjectId | ISector;
  children?: Types.ObjectId[] | ISector[];
}

const sectorSchema = new Schema<ISector>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  parent: {
    type: Types.ObjectId,
    ref: 'Sector',
    unique: true,
  },
  children: [{
    type: Types.ObjectId,
    ref: 'Sector',
  }],
});

const Sector = model<ISector>('Sector', sectorSchema);

export { Sector, ISector };
