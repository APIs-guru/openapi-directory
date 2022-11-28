import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPostAndRelatedDataPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class GetPostAndRelatedDataSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetPostAndRelatedData200ApplicationJson extends SpeakeasyBase {
    author?: shared.User;
    authorOfferCount?: number;
    authorPosts?: shared.Post[];
    authorWantedCount?: number;
    bookmarked?: boolean;
    feedback?: shared.Feedback[];
    geolocateBounds?: shared.GeolocateBounds;
    groups?: shared.Group[];
    post?: shared.Post;
    replied?: boolean;
    userCanReply?: boolean;
    viewed?: boolean;
}
export declare class GetPostAndRelatedDataRequest extends SpeakeasyBase {
    pathParams: GetPostAndRelatedDataPathParams;
    security: GetPostAndRelatedDataSecurity;
}
export declare class GetPostAndRelatedDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPostAndRelatedData200ApplicationJsonObject?: GetPostAndRelatedData200ApplicationJson;
}
