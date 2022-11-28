import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPostsByIdsQueryParams extends SpeakeasyBase {
    postIds: string;
}
export declare class GetPostsByIdsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetPostsByIdsRequest extends SpeakeasyBase {
    queryParams: GetPostsByIdsQueryParams;
    security: GetPostsByIdsSecurity;
}
export declare class GetPostsByIdsResponse extends SpeakeasyBase {
    contentType: string;
    posts?: shared.Post[];
    statusCode: number;
}
