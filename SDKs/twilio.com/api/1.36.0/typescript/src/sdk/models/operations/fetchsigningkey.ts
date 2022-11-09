import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSIGNINGKEY_SERVERS = [
	"https://api.twilio.com",
];



export class FetchSigningKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchSigningKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSigningKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchSigningKeyPathParams;

  @Metadata()
  security: FetchSigningKeySecurity;
}


export class FetchSigningKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSigningKey?: shared.ApiV2010AccountSigningKey;
}
