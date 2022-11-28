import { AxiosInstance } from "axios";
import { TwoForMobileAppOptional } from "./twoformobileappoptional";
import { Two1UserStatisticsOptional } from "./two1userstatisticsoptional";
import { Two2UserTripsOptional } from "./two2usertripsoptional";
import { Two4UserSafeScoringOptional } from "./two4usersafescoringoptional";
import { ThreeForBackEndOptional } from "./threeforbackendoptional";
import { ConsolidatedSafeScoring } from "./consolidatedsafescoring";
import { ConsolidatedStatistics } from "./consolidatedstatistics";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.telematicssdk.com", "https://mobilesdk.telematicssdk.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    twoForMobileAppOptional: TwoForMobileAppOptional;
    two1UserStatisticsOptional: Two1UserStatisticsOptional;
    two2UserTripsOptional: Two2UserTripsOptional;
    two4UserSafeScoringOptional: Two4UserSafeScoringOptional;
    threeForBackEndOptional: ThreeForBackEndOptional;
    consolidatedSafeScoring: ConsolidatedSafeScoring;
    consolidatedStatistics: ConsolidatedStatistics;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
