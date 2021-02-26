import React from 'react';
import { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import styles from '../styles/Hexagon.module.css';
import { useLazyQuery, gql } from '@apollo/client'

const GET_IMAGE_QUERY = gql`
    query photoUrl($id: ID!){
        photoUrl(id: $id) {
            url
        }
} 
`
const pageWithHexagon = () => {

    const text = useRef('Dynamic Text! click this to change!');
    const [searchFilter, useSearchFilter] = useState(0);
    const [imageUrl, { loading, error, data }] = useLazyQuery(GET_IMAGE_QUERY);

    const handleChange = () => {
        console.log("hey it's updated!");
    };
    if(data != null) {
        console.log("data= "+ data);
        console.log(data.photoUrl.url);
    }
    if (loading) return <p>Loading ...</p>;
    if (error) return (
        <p>{error.message} </p>
    )
    return (
        <div>
            <div>
                id:
                <input
                    type='number'
                    onChange={(e) => {
                        useSearchFilter(parseInt(e.target.value));
                        console.log("num changed!");
                    }}
                />
                <button
                    onClick={() => {
                        console.log("query!");
                        imageUrl({
                            variables: { id: searchFilter }
                        })
                    }}
                >Get image</button>
            </div>
            <div className={styles.imagePadding}>
                <div className={styles.hexa}>
                    <div className={styles.hex1}>
                        <div className={styles.hex2}>
                            {data&&
                                // <p>{data.photoUrl.url}</p>
                                // // <><>(photo)=>{
                                // // <p>{photo}</p>
                                <img className={styles.image} src={data.photoUrl.url}></img>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.editableTextPadding}>
                <ContentEditable className={styles.editableText} html={text.current} onChange={handleChange} />
            </div>
        </div>
    )


}

export default pageWithHexagon;