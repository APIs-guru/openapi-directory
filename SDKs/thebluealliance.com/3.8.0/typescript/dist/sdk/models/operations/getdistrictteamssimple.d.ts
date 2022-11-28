import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictTeamsSimplePathParams extends SpeakeasyBase {
    districtKey: string;
}
export declare class GetDistrictTeamsSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictTeamsSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictTeamsSimpleRequest extends SpeakeasyBase {
    pathParams: GetDistrictTeamsSimplePathParams;
    headers: GetDistrictTeamsSimpleHeaders;
    security: GetDistrictTeamsSimpleSecurity;
}
export declare class GetDistrictTeamsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamSimples?: shared.TeamSimple[];
}
