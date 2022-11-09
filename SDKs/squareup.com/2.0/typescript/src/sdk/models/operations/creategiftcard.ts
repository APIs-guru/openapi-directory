import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGiftCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateGiftCardRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateGiftCardRequest;

  @Metadata()
  security: CreateGiftCardSecurity;
}


export class CreateGiftCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createGiftCardResponse?: shared.CreateGiftCardResponse;

  @Metadata()
  statusCode: number;
}
