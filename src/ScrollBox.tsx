import { Component } from 'react';

class ScrollBox extends Component {    
    
    box!: HTMLDivElement | null;

    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box!;
        const scrollTop = scrollHeight - clientHeight;
    }   
    
    render() {
        const style: any = {
            border: "1px solid black",
            height: "300px",
            width: "300px",
            overflow: "auto",
            position: "relative"
        };

        const inenrStyle: any = {
            width: "100%",
            height: "650px",
            background: 'linear-gradient(white, black)'
        }     
        

        return (
            <div
                style={style}
                ref={(ref) => {this.box=ref}}>
                <div style={inenrStyle} />
            </div>
        );
    }
}

export default ScrollBox;