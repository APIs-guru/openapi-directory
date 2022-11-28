import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamDistrictsPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamDistrictsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamDistrictsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamDistrictsRequest extends SpeakeasyBase {
    pathParams: GetTeamDistrictsPathParams;
    headers: GetTeamDistrictsHeaders;
    security: GetTeamDistrictsSecurity;
}
export declare class GetTeamDistrictsResponse extends SpeakeasyBase {
    contentType: string;
    districtLists?: shared.DistrictList[];
    headers: Map<string, string[]>;
    statusCode: number;
}
