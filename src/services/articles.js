import axios from '.'

const route = '/articles'

export const createArticleService = async data => await axios.post(route, data)

export const updateArticleService = async data => await axios.put(`${route}/${data.id}`, data)

export const deleteArticleService = async articleId => await axios.delete(`${route}/${articleId}`)

export const getArticlesService = async (page = 1, filter = null, sort = 'createdAt:-1') => await axios.get(`${route}?page=${page}${filter ? `&filter=${filter}` : ''}&sort=${sort}`)

export const searchArticleService = async (key, value) => await axios.get(`${route}?search=${key}:${value}`)

export const searchArticleServiceWithFetch = async (key, value) => {
    const res = await fetch(`https://6284ab5d6b6c317d5ba7737c.endapi.io${route}?search=${key}:${value}`)
    return await res.json()
}

export const getArticlesServiceFetch = async (page = 1, filter = null, sort = 'createdAt:-1') => {
    const res = await fetch(`https://6284ab5d6b6c317d5ba7737c.endapi.io${route}?page=${page}${filter ? `&filter=${filter}` : ''}&sort=${sort}`)
    return await res.json()
}