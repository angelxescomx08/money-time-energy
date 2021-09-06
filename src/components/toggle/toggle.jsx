import './toggle.css'

const Toggle = ({arr,num,checked,setEstados,text,estados}) => {
    return (
        <div className="container-toggle">
            <label className="switch">
                <input type="checkbox" checked={checked[num]} onChange={
                    (e)=>{
                        if(arr.length < 2 && e.target.checked){
                            arr.push(num)
                        }else if(arr.length === 2 && e.target.checked){
                            arr.shift()
                            arr.push(num)
                        }
                        const est = [false,false,false]
                        for(let i=0;i<arr.length;i++){
                            if(arr[i]===0){
                                est[0] = true
                            }
                            else if(arr[i]===1){
                                est[1] = true
                            }
                            else if(arr[i]===2){
                                est[2] = true
                            }
                        }
                        setEstados(est)
                    }
                }/>
                <span className="slider round"></span>
            </label>
            {<span className={checked[num]?"text active":"text"}>{text}</span>}
        </div>
    )
}

export default Toggle