import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECREDENTIALAWS_SERVERS = [
	"https://accounts.twilio.com",
];



export class UpdateCredentialAwsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateCredentialAwsUpdateCredentialAwsRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;
}


export class UpdateCredentialAwsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateCredentialAwsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateCredentialAwsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateCredentialAwsUpdateCredentialAwsRequest;

  @Metadata()
  security: UpdateCredentialAwsSecurity;
}


export class UpdateCredentialAwsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
