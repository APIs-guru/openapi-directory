import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECREDENTIALLIST_SERVERS = [
	"https://trunking.twilio.com",
];



export class CreateCredentialListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class CreateCredentialListCreateCredentialListRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CredentialListSid;" })
  credentialListSid: string;
}


export class CreateCredentialListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCredentialListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateCredentialListPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCredentialListCreateCredentialListRequest;

  @Metadata()
  security: CreateCredentialListSecurity;
}


export class CreateCredentialListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1TrunkCredentialList?: shared.TrunkingV1TrunkCredentialList;
}
