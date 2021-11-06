import React, { useEffect, useState } from "react";
import queryString from "query-string";

import "./styles.scss";

function FeatureDetail(props) {
    const query = queryString.parse(location.search);
    const { features } = props;
    const [feature, setFeature] = useState({});
    
    useEffect(() => {
        getFeature();
    }, [features]);

    function getFeature() {
        const { id } = query;
        const filter = features.filter(item => item.id === id);
        setFeature(filter[0]);
    }

    return (
        <section className="feature-detail">
            <h1 className="title section-title">{feature?.properties?.title}</h1>
            <ul className="feature-fields">
                <li className="field">
                    <div className="field-name">Title</div>
                    <div className="field-value">{feature?.properties?.title}</div>
                </li>
                <li className="field">
                    <div className="field-name">Magnitude</div>
                    <div className="field-value">{feature?.properties?.mag}</div>
                </li>
                <li className="field">
                    <div className="field-name">Time</div>
                    <div className="field-value">{feature?.properties?.time}</div>
                </li>
                <li className="field">
                    <div className="field-name">Status</div>
                    <div className="field-value">{feature?.properties?.status}</div>
                </li>
                <li className="field">
                    <div className="field-name">Tsunami</div>
                    <div className="field-value">{feature?.properties?.tsunami}</div>
                </li>
                <li className="field">
                    <div className="field-name">Type</div>
                    <div className="field-value">{feature?.properties?.type}</div>
                </li>
            </ul>
        </section>
    );
}

export default FeatureDetail;