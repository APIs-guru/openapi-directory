import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPostAndRelatedDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class GetPostAndRelatedDataSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetPostAndRelatedDataSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetPostAndRelatedDataSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetPostAndRelatedDataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPostAndRelatedDataSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPostAndRelatedDataSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetPostAndRelatedDataSecurityOption3;
}


export class GetPostAndRelatedDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPostAndRelatedDataPathParams;

  @Metadata()
  security: GetPostAndRelatedDataSecurity;
}


export class GetPostAndRelatedData200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: shared.User;

  @Metadata({ data: "json, name=author_offer_count" })
  authorOfferCount?: number;

  @Metadata({ data: "json, name=author_posts", elemType: shared.Post })
  authorPosts?: shared.Post[];

  @Metadata({ data: "json, name=author_wanted_count" })
  authorWantedCount?: number;

  @Metadata({ data: "json, name=bookmarked" })
  bookmarked?: boolean;

  @Metadata({ data: "json, name=feedback", elemType: shared.Feedback })
  feedback?: shared.Feedback[];

  @Metadata({ data: "json, name=geolocate_bounds" })
  geolocateBounds?: shared.GeolocateBounds;

  @Metadata({ data: "json, name=groups", elemType: shared.Group })
  groups?: shared.Group[];

  @Metadata({ data: "json, name=post" })
  post?: shared.Post;

  @Metadata({ data: "json, name=replied" })
  replied?: boolean;

  @Metadata({ data: "json, name=user_can_reply" })
  userCanReply?: boolean;

  @Metadata({ data: "json, name=viewed" })
  viewed?: boolean;
}


export class GetPostAndRelatedDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPostAndRelatedData200ApplicationJsonObject?: GetPostAndRelatedData200ApplicationJson;
}
