import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelTerminalCheckoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=checkout_id" })
  checkoutId: string;
}


export class CancelTerminalCheckoutSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CancelTerminalCheckoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelTerminalCheckoutPathParams;

  @Metadata()
  security: CancelTerminalCheckoutSecurity;
}


export class CancelTerminalCheckoutResponse extends SpeakeasyBase {
  @Metadata()
  cancelTerminalCheckoutResponse?: shared.CancelTerminalCheckoutResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
