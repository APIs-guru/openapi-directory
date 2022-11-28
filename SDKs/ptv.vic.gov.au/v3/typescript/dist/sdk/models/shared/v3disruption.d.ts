import { SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionRoute } from "./v3disruptionroute";
import { V3DisruptionStop } from "./v3disruptionstop";
export declare class V3Disruption extends SpeakeasyBase {
    colour?: string;
    description?: string;
    displayOnBoard?: boolean;
    displayStatus?: boolean;
    disruptionId?: number;
    disruptionStatus?: string;
    disruptionType?: string;
    fromDate?: Date;
    lastUpdated?: Date;
    publishedOn?: Date;
    routes?: V3DisruptionRoute[];
    stops?: V3DisruptionStop[];
    title?: string;
    toDate?: Date;
    url?: string;
}
