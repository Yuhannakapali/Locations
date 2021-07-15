import { join } from "path";

const SOURCE_PATH = join(__dirname,"..", "src")

export default {
    template: {
        path : join(__dirname, "..", "views")
    },
    database:{
        url :"postgres://app:app@localhost/location"
    },
    orm:{
        entities:[`${SOURCE_PATH}/**/*.entity.ts`],
    },
    public :{
        path : join(__dirname, "..", "public")
    }
}