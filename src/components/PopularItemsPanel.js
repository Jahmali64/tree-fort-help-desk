import React from "react";
import styles from './PopularItemsPanel.module.css';
import { Link } from "react-router-dom";

const PopularItemsPanel = ({popularItems}) => {
    return (
        <div className={styles.popularItemsGrid}>
            {popularItems.map((popularItem) => (
                <div className={styles.popularItemsContainer} key={popularItem.id}>
                    <div className={styles.popularItemsHeader}>
                        <div className={styles.popularItemsLogo}><img src={`/assets/svg/${popularItem.popularTypeLogo}`} alt={popularItem.popularType} /></div>
                        <div className={styles.popularItemsTitle}>{popularItem.popularType}</div>
                    </div>
                    <div className={styles.popularItemsContent}>
                        {popularItem.popularUrls.items.map((urls) => (
                            <Link className={styles.popularItemsLinks} to={urls.url} key={urls.id}>
                                <span>{urls.urlName}</span>
                            </Link>
                        ))}
                    </div>
                </div> 
            ))}
        </div>
    );
}

export default PopularItemsPanel;