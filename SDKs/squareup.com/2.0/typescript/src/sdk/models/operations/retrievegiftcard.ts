import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveGiftCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveGiftCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveGiftCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveGiftCardPathParams;

  @Metadata()
  security: RetrieveGiftCardSecurity;
}


export class RetrieveGiftCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveGiftCardResponse?: shared.RetrieveGiftCardResponse;

  @Metadata()
  statusCode: number;
}
