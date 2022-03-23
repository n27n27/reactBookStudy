import { useReducer } from 'react';

function reducer(state: any, action: { name: any; value: any; }) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const InfoReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        nickname: ""
    });

    const { name, nickname } = state;
    const onChange = (e: any) => {
        dispatch(e.target);
    }

    return (
        <>        
        <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
        </div>        
        <div>
            <div><b>이름:</b>{name}</div>
        </div>
        <div>
            <b>닉네임: </b>
            {nickname}
        </div>
        </>
    );
}

export default InfoReducer