import React, { useState, useEffect } from 'react';

// 4 - custom hook

function useFetch(url) {
    const [data, setData] = useState(null)

    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            setMethod(method)
        }
    }

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url)

            const json = await res.json()

            setData(json)

        }

        fetchData()
    }, [url, callFetch])

    // 5 - refatorando post

    useEffect(() => {

        async function httpRequest() {
            if (method === "POST") {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()

                setCallFetch(json)
            }
        }

        httpRequest()

    }, [config, method, url])

    return { data, httpConfig };
}

export default useFetch;