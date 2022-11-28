import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchSipAuthCallsCredentialListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class FetchSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchSipAuthCallsCredentialListMappingPathParams;

  @SpeakeasyMetadata()
  security: FetchSipAuthCallsCredentialListMappingSecurity;
}


export class FetchSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
}
