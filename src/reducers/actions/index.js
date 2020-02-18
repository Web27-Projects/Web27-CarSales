// 4. Create my actions

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const TOTAL = 'TOTAL';

export const addItem = (feature) => {
    return {
        type: ADD,
        payload: feature
    }
}

export const removeItem = (feature) => {
    return {
        type: REMOVE,
        payload: feature
    }
}

export const total = (total) => {
    return {
        type: TOTAL,
        payload: total
    }
}