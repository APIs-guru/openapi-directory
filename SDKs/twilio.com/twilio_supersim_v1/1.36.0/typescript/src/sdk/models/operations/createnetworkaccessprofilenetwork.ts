import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATENETWORKACCESSPROFILENETWORK_SERVERS = [
	"https://supersim.twilio.com",
];



export class CreateNetworkAccessProfileNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" })
  networkAccessProfileSid: string;
}


export class CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Network;" })
  network: string;
}


export class CreateNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateNetworkAccessProfileNetworkPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest;

  @Metadata()
  security: CreateNetworkAccessProfileNetworkSecurity;
}


export class CreateNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1NetworkAccessProfileNetworkAccessProfileNetwork?: shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}
