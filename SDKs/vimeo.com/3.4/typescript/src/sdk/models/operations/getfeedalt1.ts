import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetFeedAlt1TypeEnum {
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


export class GetFeedAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFeedAlt1TypeEnum;
}


export class GetFeedAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetFeedAlt1Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFeedAlt1QueryParams;

  @Metadata()
  security: GetFeedAlt1Security;
}


export class GetFeedAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Activity31 })
  activity31s?: shared.Activity31[];
}
