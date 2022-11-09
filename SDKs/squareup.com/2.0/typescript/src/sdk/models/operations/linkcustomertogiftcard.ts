import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LinkCustomerToGiftCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gift_card_id" })
  giftCardId: string;
}


export class LinkCustomerToGiftCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class LinkCustomerToGiftCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LinkCustomerToGiftCardPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LinkCustomerToGiftCardRequest;

  @Metadata()
  security: LinkCustomerToGiftCardSecurity;
}


export class LinkCustomerToGiftCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linkCustomerToGiftCardResponse?: shared.LinkCustomerToGiftCardResponse;

  @Metadata()
  statusCode: number;
}
