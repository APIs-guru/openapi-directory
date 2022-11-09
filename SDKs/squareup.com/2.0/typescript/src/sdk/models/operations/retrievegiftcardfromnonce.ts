import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveGiftCardFromNonceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveGiftCardFromNonceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RetrieveGiftCardFromNonceRequest;

  @Metadata()
  security: RetrieveGiftCardFromNonceSecurity;
}


export class RetrieveGiftCardFromNonceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveGiftCardFromNonceResponse?: shared.RetrieveGiftCardFromNonceResponse;

  @Metadata()
  statusCode: number;
}
