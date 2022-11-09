import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGiftCardActivitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateGiftCardActivityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateGiftCardActivityRequest;

  @Metadata()
  security: CreateGiftCardActivitySecurity;
}


export class CreateGiftCardActivityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createGiftCardActivityResponse?: shared.CreateGiftCardActivityResponse;

  @Metadata()
  statusCode: number;
}
