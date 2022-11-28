import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictTeamsPathParams extends SpeakeasyBase {
    districtKey: string;
}
export declare class GetDistrictTeamsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictTeamsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictTeamsRequest extends SpeakeasyBase {
    pathParams: GetDistrictTeamsPathParams;
    headers: GetDistrictTeamsHeaders;
    security: GetDistrictTeamsSecurity;
}
export declare class GetDistrictTeamsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teams?: shared.Team[];
}
