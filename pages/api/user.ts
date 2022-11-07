import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../@types/user";

const users: User[] =[{ id:1},{ id:2},{ id:3}]

export default function handler(_req: NextApiRequest, res: NextApiResponse){
    // usersからデータを取得 & jsonファイルに変換
    res.status(200).json(users)
}

