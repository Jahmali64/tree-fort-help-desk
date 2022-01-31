import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './HomepageFAQs.module.css';
import FAQPanels from "./FAQPanels";
import SkeletonLoadingFAQ from './SkeletonLoadingFAQ';
import getQueryData from "./getQueryData";

const HomepageFAQs = () => {
    const {data, isPending, error} = getQueryData("listFAQTypes");
    const loadingData = [1, 2, 3, 4, 5];
    const faqTypes = []
    const faqs = []
    data.map((faq) => (
        faqTypes.push(faq.faqType)
    ))
    data.map((faq) => (
        faqs.push(faq.faqs.items)
    ))
    return (
        <div className={styles.faqContainer}>
            <Tabs selectedTabClassName={styles.faqMenuItemActive}>
                <TabList className={styles.faqMenu}>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[0] !== undefined && faqTypes[0]}
                    </Tab>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[1] !== undefined && faqTypes[1]}
                    </Tab>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[2] !== undefined && faqTypes[2]}
                    </Tab>
                    <Tab className={styles.faqMenuItem}>
                        {isPending && <div className="center">Loading...</div>}
                        {faqTypes[3] !== undefined && faqTypes[3]}
                    </Tab>
                </TabList>
                <TabPanel className={styles.tabPanel}>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[0] !== undefined && <FAQPanels faqs={faqs[0]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[1] !== undefined && <FAQPanels faqs={faqs[1]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[2] !== undefined && <FAQPanels faqs={faqs[2]} />}                    
                </TabPanel>
                <TabPanel>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingFAQ items={loadingData} /></div>}
                    {faqs[3] !== undefined && <FAQPanels faqs={faqs[3]} />}                    
                </TabPanel>
            </Tabs>
        </div>
    ); 
}

export default HomepageFAQs;