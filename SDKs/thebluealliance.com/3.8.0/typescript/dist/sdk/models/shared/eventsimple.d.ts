import { SpeakeasyBase } from "../../../internal/utils";
import { DistrictList } from "./districtlist";
export declare class EventSimple extends SpeakeasyBase {
    city?: string;
    country?: string;
    district?: DistrictList;
    endDate: Date;
    eventCode: string;
    eventType: number;
    key: string;
    name: string;
    startDate: Date;
    stateProv?: string;
    year: number;
}
