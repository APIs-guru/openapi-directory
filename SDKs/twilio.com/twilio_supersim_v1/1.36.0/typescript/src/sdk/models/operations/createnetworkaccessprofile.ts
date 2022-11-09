import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATENETWORKACCESSPROFILE_SERVERS = [
	"https://supersim.twilio.com",
];



export class CreateNetworkAccessProfileCreateNetworkAccessProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Networks;" })
  networks?: string[];

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateNetworkAccessProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNetworkAccessProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNetworkAccessProfileCreateNetworkAccessProfileRequest;

  @Metadata()
  security: CreateNetworkAccessProfileSecurity;
}


export class CreateNetworkAccessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
