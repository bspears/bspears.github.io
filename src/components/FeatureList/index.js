import React from "react";
import ListRow from "./ListRow";
import { sortFeatures } from "../../slices/features/featuresSlice.js";
import { useDispatch } from "react-redux";

import {
    Link
  } from "react-router-dom";
 import "./styles.scss";

function FeatureList(props) {
    const { features, title } = props;
    const dispatch = useDispatch();

    function renderItems() {
        const elements = [];
        for (const item in features) {
            const thisItem = features[item];
            const { id } = thisItem;
            const { place, mag, time } = thisItem.properties;

            elements.push(
            <ListRow
                key={place}
                title={place} 
                mag={mag}
                time={time}
                id={id}
            />)
        }

        return elements;
    }

    function handleSort(type) {
        dispatch(sortFeatures(features, type));
    }

    return (
        <section className="feature-list">
            <h1 className="title section-title">{title}</h1>
            <ul className="list-title">
                <div className="column" onClick={() => handleSort("title")}>Title</div>
                <div className="column" onClick={() => handleSort("mag")}>Magnitude</div>
                <div className="column" onClick={() => handleSort("time")}>Time</div>
            </ul>
            <ul>
                {renderItems()}
            </ul>
        </section>
    );
}

export default FeatureList;