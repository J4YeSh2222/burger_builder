import axios from "axios";

const instance=axios.create({
    baseURL:'https://burger-builder-15e75-default-rtdb.firebaseio.com/'
});

export default instance;