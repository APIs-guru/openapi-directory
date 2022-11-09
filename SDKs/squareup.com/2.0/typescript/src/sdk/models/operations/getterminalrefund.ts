import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTerminalRefundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=terminal_refund_id" })
  terminalRefundId: string;
}


export class GetTerminalRefundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTerminalRefundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTerminalRefundPathParams;

  @Metadata()
  security: GetTerminalRefundSecurity;
}


export class GetTerminalRefundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTerminalRefundResponse?: shared.GetTerminalRefundResponse;

  @Metadata()
  statusCode: number;
}
