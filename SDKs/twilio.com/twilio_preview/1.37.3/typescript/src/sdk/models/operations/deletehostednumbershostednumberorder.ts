import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteHostedNumbersHostedNumberOrderServerList = [
	"https://preview.twilio.com",
] as const;


export class DeleteHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteHostedNumbersHostedNumberOrderPathParams;

  @SpeakeasyMetadata()
  security: DeleteHostedNumbersHostedNumberOrderSecurity;
}


export class DeleteHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
