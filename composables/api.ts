import Http from "@/utils/http";
export const nav = (params?:any)=>{
    return Http.post('/index/typeHierarchy',params)
}