import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCredentialListServerList = [
	"https://trunking.twilio.com",
] as const;


export class CreateCredentialListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class CreateCredentialListCreateCredentialListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CredentialListSid;" })
  credentialListSid: string;
}


export class CreateCredentialListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCredentialListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateCredentialListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCredentialListCreateCredentialListRequest;

  @SpeakeasyMetadata()
  security: CreateCredentialListSecurity;
}


export class CreateCredentialListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkCredentialList?: shared.TrunkingV1TrunkCredentialList;
}
