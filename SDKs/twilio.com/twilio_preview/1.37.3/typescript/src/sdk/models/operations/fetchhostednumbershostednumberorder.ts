import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchHostedNumbersHostedNumberOrderServerList = [
	"https://preview.twilio.com",
] as const;


export class FetchHostedNumbersHostedNumberOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchHostedNumbersHostedNumberOrderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchHostedNumbersHostedNumberOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchHostedNumbersHostedNumberOrderPathParams;

  @SpeakeasyMetadata()
  security: FetchHostedNumbersHostedNumberOrderSecurity;
}


export class FetchHostedNumbersHostedNumberOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewHostedNumbersHostedNumberOrder?: shared.PreviewHostedNumbersHostedNumberOrder;
}
