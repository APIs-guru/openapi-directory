import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteNetworkAccessProfileNetworkServerList = [
	"https://supersim.twilio.com",
] as const;


export class DeleteNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" })
  networkAccessProfileSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteNetworkAccessProfileNetworkPathParams;

  @SpeakeasyMetadata()
  security: DeleteNetworkAccessProfileNetworkSecurity;
}


export class DeleteNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
