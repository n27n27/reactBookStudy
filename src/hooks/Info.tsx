import { useEffect, useState } from 'react';

const Info = () => {

    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")

    useEffect(() => {
        console.log("effect");
        console.log(name);

        return () => {
            console.log('cleanup')
            console.log(name);
        }
    },[name])

    const onChangeName = (e: any) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e: any) => {
        setNickname(e.target.value);
    }

    return (
        <>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </>
    );
}

export default Info