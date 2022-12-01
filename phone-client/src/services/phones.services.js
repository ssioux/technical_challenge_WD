import service from "./config.services"

// http://localhost:5005/api baseUrl

const phonesListService = () => {
    return service.get("/phones")
}

const phonesDetailsService = (id) => {
    return service.get(`/phones/${id}`)
}

export{
    phonesListService,
    phonesDetailsService
}