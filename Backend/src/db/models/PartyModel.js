/* eslint-disable max-lines-per-function */
import BaseModel from "./BaseModel.js"
import detailPartyModel from "./DetailPartyModel.js"
import UserModel from "./UserModel.js"

class PartyModel extends BaseModel {
  static get tableName() {
    return "party"
  }

  static get relationMappings() {
    return {
      arrange: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "party.arrange_id",
          to: "users.id",
        },
      },
      users: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: "party.id",
          through: {
            from: "enrollment.party_id",
            to: "enrollment.user_id",
          },
          to: "users.id",
        },
      },
      AffinitiesParty: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: PartyModel,
        join: {
          from: "party.id",
          through: {
            from: "affinity.party_id",
            to: "affinity.centerofinterest_id",
          },
          to: "centerofinterest.id",
        },
      },
      BringAgames: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: "party.id",
          through: {
            from: "bringgame.party_id",
            to: "bringgame.user_id",
          },
          to: "user.id",
        },
      },
      address: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "party.address_id",
          to: "address.id",
        },
      },
      typeparty: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "party.typeofparty_id",
          to: "typeofparty.id",
        },
      },
      detail: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: detailPartyModel,
        join: {
          from: "party.detailparty_id",
          to: "detailParty.id",
        },
      },
    }
  }
}

export default PartyModel
