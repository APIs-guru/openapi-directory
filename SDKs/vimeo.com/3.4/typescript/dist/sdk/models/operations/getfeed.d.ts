import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeedPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetFeedTypeEnum {
    Appears = "appears",
    CategoryFeatured = "category_featured",
    Channel = "channel",
    FacebookFeed = "facebook_feed",
    Following = "following",
    Group = "group",
    Likes = "likes",
    OndemandPublish = "ondemand_publish",
    Share = "share",
    TaggedWith = "tagged_with",
    TwitterTimeline = "twitter_timeline",
    Uploads = "uploads"
}
export declare class GetFeedQueryParams extends SpeakeasyBase {
    offset?: string;
    page?: number;
    perPage?: number;
    type?: GetFeedTypeEnum;
}
export declare class GetFeedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetFeedRequest extends SpeakeasyBase {
    pathParams: GetFeedPathParams;
    queryParams: GetFeedQueryParams;
    security: GetFeedSecurity;
}
export declare class GetFeedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    activity31s?: shared.Activity31[];
}
