export default class ApiResponse{

     constructor(data = {}, statusCode = 200, success = true){
        this.statusCode = statusCode
        this.data = data
        this.success = success
     }

}