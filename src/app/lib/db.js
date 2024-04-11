const {username, password} = process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.sthweu3.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0"