import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostListingsListingIdConversationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class PostListingsListingIdConversationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


export class PostListingsListingIdConversationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostListingsListingIdConversationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostListingsListingIdConversationsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostListingsListingIdConversationsRequestBody;

  @Metadata()
  security: PostListingsListingIdConversationsSecurity;
}


export class PostListingsListingIdConversationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
