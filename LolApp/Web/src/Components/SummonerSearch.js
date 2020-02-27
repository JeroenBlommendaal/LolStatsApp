import React, { useState } from 'react';

const SummonerSearch = () => {
    const [region, setRegion] = useState('euw1');
    const [summonerName, setSummonerName] = useState('');
    const [summonerId, setSummonerId] = useState(null);

    const searchSummoner = async () => {
        const result = await fetch(`/api/summoner`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                summonerName,
                region
            })
        });

        if(result.ok) {
            const data = await result.json();
            setSummonerId(data.id);
            console.log(JSON.stringify(data));
        } else {
            console.error(`Error during summoner call: ${result.error}`);
        }
    }

    const onRegionChange = (e) => {
        setRegion(e.target.value);
    }
    
    const onSummonerNameChange = (e) => {
        setSummonerName(e.target.value);
    }

    return (
        <div className='pa2'>
            <select
                value={region}
                onChange={onRegionChange}
                >
                <option value="euw1">EUW1</option>
                <option value="us">US</option>
            </select>
            { !summonerId ? (
            <>
                <input
                    className='pa3 ba b--green bg-lightest-blue'
                    type='search'
                    placeholder='enter summoner name'
                    value={summonerName}
                    onChange={onSummonerNameChange}
                />
                <button
                    onClick={searchSummoner}
                    >Search</button>
            </>
            )
            : null}
        </div>
    );
}

export default SummonerSearch;