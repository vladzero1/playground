import React from 'react';
import { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import styles from '../styles/Hexagon.module.css';
import { useLazyQuery, gql } from '@apollo/client'

const GET_IMAGE_QUERY = gql`
    query photoUrl($filter: ID!){
        photoUrl(filter: $filter) {
            url
        }
} 
`
const pageWithHexagon = () => {

    const text = useRef('Dynamic Text!');
    const [searchFilter, useSearchFilter] = useState(0);
    const [imageUrl, { loading, error, data }] = useLazyQuery(GET_IMAGE_QUERY);

    const handleChange = () => {
        console.log("hey it's updated!");
    };

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
                            variables: { filter: searchFilter }
                        })
                    }}
                >Get image</button>
            </div>
            <div className={styles.imagePadding}>
                <div className={styles.hexa}>
                    <div className={styles.hex1}>
                        <div className={styles.hex2}>
                            <img className={styles.image} src={data}></img>
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