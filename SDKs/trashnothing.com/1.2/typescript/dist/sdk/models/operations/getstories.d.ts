import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoriesQueryParams extends SpeakeasyBase {
    devicePixelRatio?: number;
    latitude?: number;
    longitude?: number;
    page?: number;
    perPage?: number;
    sortBy?: string;
}
export declare class GetStoriesSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetStories200ApplicationJson extends SpeakeasyBase {
    stories?: shared.Story[];
}
export declare class GetStoriesRequest extends SpeakeasyBase {
    queryParams: GetStoriesQueryParams;
    security: GetStoriesSecurity;
}
export declare class GetStoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStories200ApplicationJsonObject?: GetStories200ApplicationJson;
}
