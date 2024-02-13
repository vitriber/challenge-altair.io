
import { useEffect, useState } from 'react'
import { api } from '../../services/api';
import { GeneratorPageHeader } from '../../components/GeneratorPageHeader';
import { Grid } from '../../components/Grid';
import { Code } from '../../components/Code';
import { socket } from '../../services/socket';

export const GeneratorPage = () => {
    const [grid, setGrid] = useState<string[][]>();
    const [code, setCode] = useState<string>();
    const [character, setCharacter] = useState<string>();
    const [intervalCall, setIntervalCall] = useState<number>();
    const [isChangeCharacter, setIsChangeCharacter] = useState<boolean>(false);

    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
          setIsConnected(true);
        }
    
        function onDisconnect() {
          setIsConnected(false);
        }
    
        function onCodeEvent(value: string) {
          setCode(value);
        }
    
        socket.on('connection', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('code', onCodeEvent);
    
        return () => {
          socket.off('connection', onConnect);
          socket.off('disconnect', onDisconnect);
          socket.off('code', onCodeEvent);
        };
      }, []);
    

    const getGrid = async (character?: string) => {
        try {
            api.get('grid', {
                params: {
                    character
                }, 
            }).then(response => {
                const grid = response.data.data;
                const code = response.data.code;
                setGrid(grid);
                setCode(code);
        })} catch (e) {
            console.log(e);
        }

    }

    const handleChangeCharacter = (value: string) => {
        if(value) {
            setCharacter(value)
        }
    }

    const handleGenerateGrid = (character?: string) => {
        clearInterval(intervalCall);
        setIntervalCall(setInterval(() => {
            character ? getGrid(character): getGrid();
        }, 2000))
    }

    const handleBlockCharacter = () => {
        setIsChangeCharacter(true);

        setTimeout(function(){ 
            setIsChangeCharacter(false); 
        }, 4000);
    }

    useEffect(() => {
        if(character) {
            clearInterval(intervalCall);
            handleBlockCharacter()
            handleGenerateGrid(character)
        }
    }, [character])

    return (
        <>
            <GeneratorPageHeader 
                isChangeCharacter={isChangeCharacter}
                handleGenerateGrid={handleGenerateGrid} 
                handleChangeCharacter={handleChangeCharacter}/>
            <Grid grid={grid} />
            {code && <Code code={code} />}
        </>
    )
}