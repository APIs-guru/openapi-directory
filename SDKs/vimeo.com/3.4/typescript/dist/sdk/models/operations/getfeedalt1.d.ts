import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFeedAlt1TypeEnum {
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
export declare class GetFeedAlt1QueryParams extends SpeakeasyBase {
    offset?: string;
    page?: number;
    perPage?: number;
    type?: GetFeedAlt1TypeEnum;
}
export declare class GetFeedAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetFeedAlt1Request extends SpeakeasyBase {
    queryParams: GetFeedAlt1QueryParams;
    security: GetFeedAlt1Security;
}
export declare class GetFeedAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    activity31s?: shared.Activity31[];
}
