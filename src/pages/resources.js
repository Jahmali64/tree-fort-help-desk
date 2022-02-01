import React from 'react';
import Layout from '@theme/Layout';
import styles from './resources.module.css'
import HomepageHeader from '../components/HomepageHeader';
import HomepageSupportRequest from '../components/HomepageSupportRequest';
import getQueryData from "../components/getQueryData";
import ResourcesPanel from '../components/ResourcesPanel';
import SkeletonLoadingDocs from '../components/SkeletonLoadingDocs';

export default function Resources() {
    const {data, isPending, error} = getQueryData("listResourceTypes");
    const loadingData = [1, 2];
    return (
        <Layout
            title="Resources"
            description="">
            <HomepageHeader title="Search our resources here" cssBackgroundClass="homePageBannerOther" />
            <main>
                <h2 className={styles.title}>View our helpful resources for your Team and Clients</h2>
                <div className={styles.resourcesContainer}>
                    {error && <div className="center">{error}</div>}
                    {isPending && <div className={styles.loading}><SkeletonLoadingDocs items={loadingData} height={350} /></div>}
                    {data && <ResourcesPanel resources={data} />}
                </div>
            </main>
            <HomepageSupportRequest />
        </Layout>
    );
}