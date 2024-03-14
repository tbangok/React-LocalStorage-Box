function Box({name,color}){
    return (
        <div style={{
            width:'50px',
            backgroundColor: color,
            display: 'flex',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
     
        }}>
             {name}
        </div>
    )
    
    }
    
    export function ColorBox({allBox}) {
        return (
            <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
                width: '80%'
            }}>
                {allBox.map((box,index)=>(<Box key={index} name={box.name} color={box.color} />)) }
            </div>
        )
    
    }