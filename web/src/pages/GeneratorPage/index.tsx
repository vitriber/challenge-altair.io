
import { useEffect, useState } from 'react'
import { api } from '../../services/api';
import { GeneratorPageHeader } from '../../components/GeneratorPageHeader';
import { Grid } from '../../components/Grid';
import { Code } from '../../components/Code';

export const GeneratorPage = () => {
    const [grid, setGrid] = useState<string[][]>();
    const [code, setCode] = useState<string>();

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
            getGrid(value);
        }
    }

    useEffect(() => {
        const intervalCall = setInterval(() => {
            getGrid();
        }, 2000);
        return () => {
          clearInterval(intervalCall);
        };
      }, []);

    return (
        <>
            <GeneratorPageHeader getGrid={getGrid} handleChangeCharacter={handleChangeCharacter}/>
            <Grid grid={grid} />
            <Code code={code} />
        </>
    )
}