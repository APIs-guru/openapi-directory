import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoryPathParams extends SpeakeasyBase {
    storyId: string;
}
export declare class GetStoryQueryParams extends SpeakeasyBase {
    devicePixelRatio?: number;
}
export declare class GetStorySecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetStoryRequest extends SpeakeasyBase {
    pathParams: GetStoryPathParams;
    queryParams: GetStoryQueryParams;
    security: GetStorySecurity;
}
export declare class GetStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    story?: shared.Story;
}
