import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsSimplePathParams extends SpeakeasyBase {
    pageNum: number;
}
export declare class GetTeamsSimpleHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamsSimpleSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamsSimpleRequest extends SpeakeasyBase {
    pathParams: GetTeamsSimplePathParams;
    headers: GetTeamsSimpleHeaders;
    security: GetTeamsSimpleSecurity;
}
export declare class GetTeamsSimpleResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teamSimples?: shared.TeamSimple[];
}
