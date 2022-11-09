import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
	"https://preview.twilio.com",
];



export class FetchHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchHostedNumbersHostedNumberOrderPathParams;

  @Metadata()
  security: FetchHostedNumbersHostedNumberOrderSecurity;
}


export class FetchHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
