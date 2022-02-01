import React from "react";
import Collapsible from 'react-collapsible';
import Linkify from 'react-linkify';
import { Link } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";
import styles from './FAQPanels.module.css';

const FAQPanels = ({faqs}) => {
    const componentDecorator = (href, text, key) => (
        (href === "mailto:support@treefort.tech" || href === "mailto:info@treefort.tech" ?
            <a className={styles.linkifyText} href={href} key={key}>{text}</a> :
            (href === "https://treefort.netlify.app/support-request/" ?
                <Link className={styles.linkifyText} to="/support-request" key={key}>here</Link> :
                <a className={styles.linkifyText} href={href} key={key}>here</a>
            )
        )
    );
    return (
        <div>
            {faqs.map((faq) => (
                <div className={styles.faqItemContainer} key={faq.id}>
                    <Collapsible className={styles.faqItemQuestion} trigger={[<span key="0">{faq.question}</span>, <span key="1"><BsChevronDown size="18px" /></span>]}>
                        <Linkify componentDecorator={componentDecorator}>
                            <p className={styles.faqItemAnswer}>{faq.answer}</p>
                        </Linkify>                        
                    </Collapsible>
                </div>
            ))}
        </div>
    );
}

export default FAQPanels;