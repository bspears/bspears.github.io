import data from "./data.json";
import { format } from "date-fns";

export function fetchUser() {
    return data.profile;
}

export function fetchSiteData() {
    return data.site;
}

export function fetchFeatureData() {
    const featureResponse = data.data;

    const processData = (data) => {
        return data.map((item) => {
            return {
                ...item,
                properties: {
                    ...item.properties,
                    time: format(new Date(item.properties.time), "MMM dd, yyyy h:m aa")
                }
            }
        });
    }
    
    if (featureResponse.metadata.status === 200) {

        const featureData = processData(featureResponse.features);

        return {
            data: featureData,
            metaData: featureResponse.metadata
        }
    } else {
        console.log(`ERROR: ${featureResponse.metadata.status}`);
        throw new Error();
    }
}