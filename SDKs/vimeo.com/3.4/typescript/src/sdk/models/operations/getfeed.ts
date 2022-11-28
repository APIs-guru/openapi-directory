import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetFeedTypeEnum {
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


export class GetFeedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFeedTypeEnum;
}


export class GetFeedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFeedQueryParams;

  @SpeakeasyMetadata()
  security: GetFeedSecurity;
}


export class GetFeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Activity31 })
  activity31s?: shared.Activity31[];
}
