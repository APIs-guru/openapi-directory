import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsPathParams extends SpeakeasyBase {
    pageNum: number;
}
export declare class GetTeamsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamsRequest extends SpeakeasyBase {
    pathParams: GetTeamsPathParams;
    headers: GetTeamsHeaders;
    security: GetTeamsSecurity;
}
export declare class GetTeamsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teams?: shared.Team[];
}
