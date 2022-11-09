import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnlinkCustomerFromGiftCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gift_card_id" })
  giftCardId: string;
}


export class UnlinkCustomerFromGiftCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UnlinkCustomerFromGiftCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnlinkCustomerFromGiftCardPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UnlinkCustomerFromGiftCardRequest;

  @Metadata()
  security: UnlinkCustomerFromGiftCardSecurity;
}


export class UnlinkCustomerFromGiftCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unlinkCustomerFromGiftCardResponse?: shared.UnlinkCustomerFromGiftCardResponse;
}
