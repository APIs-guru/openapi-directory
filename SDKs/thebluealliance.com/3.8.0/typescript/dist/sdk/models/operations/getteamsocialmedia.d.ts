import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamSocialMediaPathParams extends SpeakeasyBase {
    teamKey: string;
}
export declare class GetTeamSocialMediaHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetTeamSocialMediaSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetTeamSocialMediaRequest extends SpeakeasyBase {
    pathParams: GetTeamSocialMediaPathParams;
    headers: GetTeamSocialMediaHeaders;
    security: GetTeamSocialMediaSecurity;
}
export declare class GetTeamSocialMediaResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    media?: shared.Media[];
    statusCode: number;
}
