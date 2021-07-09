import { IUser } from "./user.interface";

import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	mail: String,
	login: String,
	password: String,
	registerDate: {
		type: Number,
		default: Date.now(),
	},
	uuid: String,
	role: { type: String, default: "unverified" },
});

const userModel = mongoose.model<IUser & mongoose.Document>("User", UserSchema);

export = userModel;
