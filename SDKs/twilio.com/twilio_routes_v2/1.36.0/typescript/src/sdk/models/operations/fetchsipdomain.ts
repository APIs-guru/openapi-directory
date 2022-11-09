import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSIPDOMAIN_SERVERS = [
	"https://routes.twilio.com",
];



export class FetchSipDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SipDomain" })
  sipDomain: string;
}


export class FetchSipDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSipDomainRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchSipDomainPathParams;

  @Metadata()
  security: FetchSipDomainSecurity;
}


export class FetchSipDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  routesV2SipDomain?: shared.RoutesV2SipDomain;
}
