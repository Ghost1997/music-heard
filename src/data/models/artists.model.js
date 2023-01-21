import { DataTypes, Sequelize } from 'sequelize';

const artistsModel = (sequelize) => {
  const Artists = sequelize.define(
    'Artists',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [0, 255],
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
        },
      },
      youtubeId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: [0, 255],
        },
      },
      vevoId: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          len: [0, 255],
        },
      },
      spotifyId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 255],
        },
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        validate: {
          isDate: true,
        },
      },
    },
    {
      freezeTableName: true,
    }
  );
};

export { artistsModel };
