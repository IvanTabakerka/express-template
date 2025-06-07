import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface INews {
  id?: number;
  title: string;
  body?: string | null;
}

export interface INewsCreationAttributes extends Optional<INews, 'id'> {}

export default (connection: Sequelize) => {
  return connection.define<Model<INews, INewsCreationAttributes>>('news', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Заголовок обязателен' },
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};
