import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelTerminalRefundPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=terminal_refund_id" })
  terminalRefundId: string;
}


export class CancelTerminalRefundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CancelTerminalRefundRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelTerminalRefundPathParams;

  @Metadata()
  security: CancelTerminalRefundSecurity;
}


export class CancelTerminalRefundResponse extends SpeakeasyBase {
  @Metadata()
  cancelTerminalRefundResponse?: shared.CancelTerminalRefundResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
