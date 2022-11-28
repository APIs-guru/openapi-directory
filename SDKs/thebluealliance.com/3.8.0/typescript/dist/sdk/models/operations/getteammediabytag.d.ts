import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamMediaByTagPathParams extends SpeakeasyBase {
    mediaTag: string;
    teamKey: string;
}
export declare class GetTeamMediaByTagHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamMediaByTagSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamMediaByTagRequest extends SpeakeasyBase {
    pathParams: GetTeamMediaByTagPathParams;
    headers: GetTeamMediaByTagHeaders;
    security: GetTeamMediaByTagSecurity;
}
export declare class GetTeamMediaByTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    media?: shared.Media[];
    statusCode: number;
}
