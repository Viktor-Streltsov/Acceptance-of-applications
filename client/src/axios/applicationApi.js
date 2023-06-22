import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {preloader} from "../store/slices/preloaderSlice"
import {setApplication, setApplicationHelp, setUserApplication} from "../store/slices/applicationSlice"

export const getApplicationApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/application/`)
            dispatch(setApplication(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}
export const getApplicationHelpApi = () => {
    return async (dispatch) => {
        dispatch(preloader(true))
        try {
            const {data} = await $api.get(`api/application_help/`)
            dispatch(setApplicationHelp(data))
        } catch (e) {
            dispatch(setError(e.message))
        } finally {
            dispatch(preloader(false))
        }
    }
}

export const addApplicationApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/application/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const addApplicationHelpApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/application_help/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили')
                // dispatch(setModalActive(false))
            }
        } catch (e) {
            alert(e)
        }
    }
}

export const getUserApplicationApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/application/user/${id}`)
            dispatch(setUserApplication(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}


