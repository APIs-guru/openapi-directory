import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSIPCREDENTIALLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class FetchSipCredentialListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchSipCredentialListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSipCredentialListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchSipCredentialListMappingPathParams;

  @Metadata()
  security: FetchSipCredentialListMappingSecurity;
}


export class FetchSipCredentialListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipDomainSipCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping;
}
