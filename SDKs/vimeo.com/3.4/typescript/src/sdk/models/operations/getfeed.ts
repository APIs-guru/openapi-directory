import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFeedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}

export enum GetFeedTypeEnum {
    Appears = "appears"
,    CategoryFeatured = "category_featured"
,    Channel = "channel"
,    FacebookFeed = "facebook_feed"
,    Following = "following"
,    Group = "group"
,    Likes = "likes"
,    OndemandPublish = "ondemand_publish"
,    Share = "share"
,    TaggedWith = "tagged_with"
,    TwitterTimeline = "twitter_timeline"
,    Uploads = "uploads"
}


export class GetFeedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFeedTypeEnum;
}


export class GetFeedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetFeedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFeedPathParams;

  @Metadata()
  queryParams: GetFeedQueryParams;

  @Metadata()
  security: GetFeedSecurity;
}


export class GetFeedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Activity31 })
  activity31s?: shared.Activity31[];
}
