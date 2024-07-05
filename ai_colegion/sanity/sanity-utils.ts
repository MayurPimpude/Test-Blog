import { createClient, groq } from "next-sanity";

export async function getProjects() {

    const client = createClient(
        {
            projectId: "btpl0flc",
            dataset:"production",
            apiVersion: "2023-06-05",
        }
    );

        return client.fetch(
            groq`*[_type == "project"]{
                _id,
                _createdAt,
                name,
                "slug":slug.current
            }`
        )
}

export async function getProject(slug: string){

    const client = createClient(
        {
            projectId: "btpl0flc",
            dataset:"production",
            apiVersion: "2023-06-05",
        }
    );

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug":slug.current
        }`,
        {slug}
    );
}