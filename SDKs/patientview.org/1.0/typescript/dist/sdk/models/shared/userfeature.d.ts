import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
export declare class UserFeature extends SpeakeasyBase {
    created?: Date;
    feature?: Feature;
    id?: number;
    lastUpdate?: Date;
    optInDate?: Date;
    optInHidden?: boolean;
    optInStatus?: boolean;
    optOutHidden?: boolean;
}
