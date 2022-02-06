import React, { useEffect,useState} from 'react';

function Categories() {
    const [category,setCategory] = useState([])

    useEffect(()=>{
       
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res=>res.json())
        .then(json=>setCategory(json))

        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(json => setCategory([...category,json]))
       
        },9000)

        },[])

    console.log(category)

  return <div className="Categories-Container">
                 
                 this is the categories
                   
          </div>;
}

export default Categories;
