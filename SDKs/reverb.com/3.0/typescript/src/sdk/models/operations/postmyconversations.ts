import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyConversationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=cloudinary_photos" })
  cloudinaryPhotos?: string[];

  @Metadata({ data: "json, name=listing_id" })
  listingId?: number;

  @Metadata({ data: "json, name=recipient_id" })
  recipientId?: number;

  @Metadata({ data: "json, name=recipient_uuid" })
  recipientUuid?: string;

  @Metadata({ data: "json, name=shop_id" })
  shopId?: string;
}


export class PostMyConversationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyConversationsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyConversationsRequestBody;

  @Metadata()
  security: PostMyConversationsSecurity;
}


export class PostMyConversationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
