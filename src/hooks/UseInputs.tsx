import { useReducer } from "react";

function reducer(state: any, action: { name: any; value: any; }) {
    return {
        ...state,
        [action.name]: action.value
    };
}

export default function UseInputs(initialForm: any) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = (e: any) => {
        dispatch(e.target);
    };

    return [state, onChange];
}