import React, { useState } from 'react'
import axios from 'axios'
import { Search,Image, Button, Container } from 'semantic-ui-react'
import applogo from '../../App/logo.svg'

function SearchBar(props) {

    const [image,setImage] = useState('')
    const [result,setResult] = useState([])

    const clientId = '0BBtybJEtCPVVR_ZIe1SVNdDQx7PTxSAdUHFRVLYLhs'

    const url = `https://api.unsplash.com/search/photos/?query=${image}&client_id=${clientId}`
    
    function handleChange(event) {
        setImage(event.target.value)
    }

    function handleSubmit(event) {
        // console.log(url)
        axios.get(url)
        .then((res)=>{
            setResult(res.data)
            props.callValue(res.data.results)
        },[result])
    }

    function submitByEnter(e){
            if(e.keyCode===13){
                console.log(e.key)
                handleSubmit(e)
            }
    }

    return (
        <div>
        <Container fluid={true} width={200}>
            <Image circular centered src={applogo} alt='app-logo' width={300} />
            {/* <input type="text" placeholder="Search Images... " onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}> Search </button> */}
            <Search loading={false} size='medium' fluid={true} onSearchChange={handleChange} showNoResults={false} onKeyDown={e=>submitByEnter(e)} placeholder="Search..."/>
            <Button onClick={handleSubmit} color='blue' >Search</Button>
            { image ? (<p>Image Text : {image}</p>) : ''}
            { result.total ? (<p>total : {result.total} </p>) : ''}
            {/* <Grid celled={true} divided={true}>
            { result.map((image) => (
                    <Image src={image.urls.small}/>
            )) } 
            </Grid> */}
            </Container>
            </div>
    )
}

export default SearchBar
