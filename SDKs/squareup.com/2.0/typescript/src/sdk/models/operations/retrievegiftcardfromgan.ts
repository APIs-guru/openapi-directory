import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveGiftCardFromGanSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveGiftCardFromGanRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RetrieveGiftCardFromGanRequest;

  @Metadata()
  security: RetrieveGiftCardFromGanSecurity;
}


export class RetrieveGiftCardFromGanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveGiftCardFromGanResponse?: shared.RetrieveGiftCardFromGanResponse;

  @Metadata()
  statusCode: number;
}
