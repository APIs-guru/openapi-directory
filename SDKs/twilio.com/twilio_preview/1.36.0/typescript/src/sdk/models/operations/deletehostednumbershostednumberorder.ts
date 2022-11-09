import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
	"https://preview.twilio.com",
];



export class DeleteHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteHostedNumbersHostedNumberOrderPathParams;

  @Metadata()
  security: DeleteHostedNumbersHostedNumberOrderSecurity;
}


export class DeleteHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
