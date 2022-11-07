import { NextApiRequest, NextApiResponse } from "next";

export default function userHandler(req: NextApiRequest, res: NextApiResponse){
    const {
        query:{id,name},
        method,
 } =req
    
    switch (method){
        case 'GET':
            // 取得する
            res.status(200).json({id, name:`User${id}`})
            break
        case 'PUT':
            // 更新or作成する
            res.status(200).json({id,name:name||`User${id}`})
            break
            default:
                res.setHeader('Allow', ['GET', 'PUT'])
                res.status(405).end(`Method ${method} Not Allowed`)
    }
}