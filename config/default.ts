import { join } from "path";

export default {
    template: {
        path : join(__dirname, "..", "views")
    },

    public :{
        path : join(__dirname, "..", "public")
    }
}