import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateNetworkAccessProfileNetworkServerList = [
	"https://supersim.twilio.com",
] as const;


export class CreateNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" })
  networkAccessProfileSid: string;
}


export class CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Network;" })
  network: string;
}


export class CreateNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateNetworkAccessProfileNetworkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest;

  @SpeakeasyMetadata()
  security: CreateNetworkAccessProfileNetworkSecurity;
}


export class CreateNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1NetworkAccessProfileNetworkAccessProfileNetwork?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}
