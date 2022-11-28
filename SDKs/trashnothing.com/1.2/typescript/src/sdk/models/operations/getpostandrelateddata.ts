import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPostAndRelatedDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class GetPostAndRelatedDataSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class GetPostAndRelatedData200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: shared.User;

  @SpeakeasyMetadata({ data: "json, name=author_offer_count" })
  authorOfferCount?: number;

  @SpeakeasyMetadata({ data: "json, name=author_posts", elemType: shared.Post })
  authorPosts?: shared.Post[];

  @SpeakeasyMetadata({ data: "json, name=author_wanted_count" })
  authorWantedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=bookmarked" })
  bookmarked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feedback", elemType: shared.Feedback })
  feedback?: shared.Feedback[];

  @SpeakeasyMetadata({ data: "json, name=geolocate_bounds" })
  geolocateBounds?: shared.GeolocateBounds;

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata({ data: "json, name=post" })
  post?: shared.Post;

  @SpeakeasyMetadata({ data: "json, name=replied" })
  replied?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_can_reply" })
  userCanReply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=viewed" })
  viewed?: boolean;
}


export class GetPostAndRelatedDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPostAndRelatedDataPathParams;

  @SpeakeasyMetadata()
  security: GetPostAndRelatedDataSecurity;
}


export class GetPostAndRelatedDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPostAndRelatedData200ApplicationJsonObject?: GetPostAndRelatedData200ApplicationJson;
}
