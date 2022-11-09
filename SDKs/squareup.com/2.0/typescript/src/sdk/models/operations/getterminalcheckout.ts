import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTerminalCheckoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=checkout_id" })
  checkoutId: string;
}


export class GetTerminalCheckoutSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTerminalCheckoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTerminalCheckoutPathParams;

  @Metadata()
  security: GetTerminalCheckoutSecurity;
}


export class GetTerminalCheckoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTerminalCheckoutResponse?: shared.GetTerminalCheckoutResponse;

  @Metadata()
  statusCode: number;
}
