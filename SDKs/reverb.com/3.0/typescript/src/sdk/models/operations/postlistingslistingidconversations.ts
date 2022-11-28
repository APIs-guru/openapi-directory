import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostListingsListingIdConversationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listing_id" })
  listingId: string;
}


export class PostListingsListingIdConversationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class PostListingsListingIdConversationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostListingsListingIdConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostListingsListingIdConversationsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostListingsListingIdConversationsRequestBody;

  @SpeakeasyMetadata()
  security: PostListingsListingIdConversationsSecurity;
}


export class PostListingsListingIdConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
