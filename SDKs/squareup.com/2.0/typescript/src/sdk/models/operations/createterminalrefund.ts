import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTerminalRefundSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateTerminalRefundRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTerminalRefundRequest;

  @Metadata()
  security: CreateTerminalRefundSecurity;
}


export class CreateTerminalRefundResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createTerminalRefundResponse?: shared.CreateTerminalRefundResponse;

  @Metadata()
  statusCode: number;
}
