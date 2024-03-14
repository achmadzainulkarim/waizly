"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "addresses",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true  },
      userId: { type: "int", notNull: true },
      village : { type: "string", default: true },
      district : { type: "string", default: true },
      city: { type: "string", notNull: true },
      province : { type: "string", default: true },
      deletedAt : {type : "datetime", default : null},
      createdAt: {
        type: "datetime",
        defaultValue: new String("CURRENT_TIMESTAMP"),
        notNull: true,
      },
      updatedAt: {
        type: "datetime",
        defaultValue: new String("CURRENT_TIMESTAMP"),
        notNull: true,
      },
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("addresses", callback);
};

exports._meta = {
  version: 1,
};
