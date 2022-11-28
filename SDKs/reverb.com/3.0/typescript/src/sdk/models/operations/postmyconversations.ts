import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyConversationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=cloudinary_photos" })
  cloudinaryPhotos?: string[];

  @SpeakeasyMetadata({ data: "json, name=listing_id" })
  listingId?: number;

  @SpeakeasyMetadata({ data: "json, name=recipient_id" })
  recipientId?: number;

  @SpeakeasyMetadata({ data: "json, name=recipient_uuid" })
  recipientUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=shop_id" })
  shopId?: string;
}


export class PostMyConversationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyConversationsRequestBody;

  @SpeakeasyMetadata()
  security: PostMyConversationsSecurity;
}


export class PostMyConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
