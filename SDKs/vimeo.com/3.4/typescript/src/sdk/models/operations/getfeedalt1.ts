import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFeedAlt1TypeEnum {
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


export class GetFeedAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFeedAlt1TypeEnum;
}


export class GetFeedAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetFeedAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeedAlt1QueryParams;

  @SpeakeasyMetadata()
  security: GetFeedAlt1Security;
}


export class GetFeedAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Activity31 })
  activity31s?: shared.Activity31[];
}
