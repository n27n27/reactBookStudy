import { useState, useMemo } from 'react';

const getAverage = (numbers: any) => {
    console.log("평균값 계산 중..");
    if(numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((a: any, b: any) => a + b);
    return sum / numbers.length;
}

const Average = () => {

    const [list, setList] = useState([] as number []);
    const [number, setNumber] = useState("");

    const onChange = (e: any) => {
        setNumber(e.target.value);        
    };

    const onInsert = (e: any) => {

        const nextList = list.concat(parseInt(number));        
        setList(nextList);
        setNumber("");
    };

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => {
                    <li key={index}>{value}</li>
                })}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </>
    );

};

export default Average;