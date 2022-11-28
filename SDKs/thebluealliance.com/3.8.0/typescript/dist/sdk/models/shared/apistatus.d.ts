import { SpeakeasyBase } from "../../../internal/utils";
import { ApiStatusAppVersion } from "./apistatusappversion";
export declare class ApiStatus extends SpeakeasyBase {
    android: ApiStatusAppVersion;
    currentSeason: number;
    downEvents: string[];
    ios: ApiStatusAppVersion;
    isDatafeedDown: boolean;
    maxSeason: number;
}
