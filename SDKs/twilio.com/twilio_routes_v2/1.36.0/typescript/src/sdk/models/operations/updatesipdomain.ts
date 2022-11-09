import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESIPDOMAIN_SERVERS = [
	"https://routes.twilio.com",
];



export class UpdateSipDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SipDomain" })
  sipDomain: string;
}


export class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=VoiceRegion;" })
  voiceRegion?: string;
}


export class UpdateSipDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSipDomainRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSipDomainPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSipDomainUpdateSipDomainRequest;

  @Metadata()
  security: UpdateSipDomainSecurity;
}


export class UpdateSipDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  routesV2SipDomain?: shared.RoutesV2SipDomain;
}
