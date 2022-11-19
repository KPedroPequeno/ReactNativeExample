import { IKResult } from "./IKResult";
import axios from "./axios1"

export default class Api {

    /**
     * 
     * @param url 
     * @description Axios Get 
     * @returns Promise<IKResult<T>>
     */
    static async getResult(url: string): Promise<[]> {

        console.log(url, "Teste getResul11t")
        let result: any = []

        await axios.get(url).then((r) => {

            result = r.data

        }).catch((e) => {
            console.log(e, "ERRRO")
            result = []
            
        })

        return result

    }

    static async postResult(url: string, obj: any): Promise<any> {

        let result = {} as any

        await axios.post(url, obj).then((r) => {

            result = r.data

        }).catch((e) => {
            result.succeeded = false
            result.errors = [{ code: '999', description: e }]
        })

        return result
    }
    static async putResult<T>(url: string, obj: any): Promise<IKResult<T>> {

        let result = {} as IKResult<T>

        await axios.put(url, obj).then((r) => {

            result = r.data

        }).catch((e) => {
            result.succeeded = false
            result.errors = [{ code: '999', description: e }]
        })

        return result
    }


    static async deleteResult<T>(url: string,): Promise<IKResult<T>> {

        let result = {} as IKResult<T>

        await axios.delete(url).then((r) => {

            result = r.data

        }).catch((e) => {
            result.succeeded = false
            result.errors = [{ code: '999', description: e }]
        })

        return result

    }

}