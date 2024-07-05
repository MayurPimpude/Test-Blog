import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "btpl0flc",
    dataset:"production",
    title:"Ai Colegion",
    apiVersion: "2023-06-05",
    basePath:"/studio",
    plugins:[deskTool()],
    schema:{types:schemas}
})

export default config;