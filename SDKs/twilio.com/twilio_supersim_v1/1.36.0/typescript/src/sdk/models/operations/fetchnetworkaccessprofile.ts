import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHNETWORKACCESSPROFILE_SERVERS = [
	"https://supersim.twilio.com",
];



export class FetchNetworkAccessProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchNetworkAccessProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchNetworkAccessProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchNetworkAccessProfilePathParams;

  @Metadata()
  security: FetchNetworkAccessProfileSecurity;
}


export class FetchNetworkAccessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
