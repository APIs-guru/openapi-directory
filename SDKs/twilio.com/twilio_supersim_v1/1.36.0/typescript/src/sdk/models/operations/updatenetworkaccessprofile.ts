import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATENETWORKACCESSPROFILE_SERVERS = [
	"https://supersim.twilio.com",
];



export class UpdateNetworkAccessProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateNetworkAccessProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateNetworkAccessProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateNetworkAccessProfilePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest;

  @Metadata()
  security: UpdateNetworkAccessProfileSecurity;
}


export class UpdateNetworkAccessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
