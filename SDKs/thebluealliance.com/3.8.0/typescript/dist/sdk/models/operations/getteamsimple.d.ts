import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamSimplePathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamSimpleRequest extends SpeakeasyBase {
    pathParams: GetTeamSimplePathParams;
    headers: GetTeamSimpleHeaders;
    security: GetTeamSimpleSecurity;
}
export declare class GetTeamSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamSimple?: shared.TeamSimple;
}
