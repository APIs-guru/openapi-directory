import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchNetworkAccessProfileNetworkServerList = [
	"https://supersim.twilio.com",
] as const;


export class FetchNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" })
  networkAccessProfileSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchNetworkAccessProfileNetworkPathParams;

  @SpeakeasyMetadata()
  security: FetchNetworkAccessProfileNetworkSecurity;
}


export class FetchNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1NetworkAccessProfileNetworkAccessProfileNetwork?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}
