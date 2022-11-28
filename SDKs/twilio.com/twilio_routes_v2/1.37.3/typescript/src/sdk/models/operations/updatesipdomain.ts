import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSipDomainServerList = [
	"https://routes.twilio.com",
] as const;


export class UpdateSipDomainPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SipDomain" })
  sipDomain: string;
}


export class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=VoiceRegion;" })
  voiceRegion?: string;
}


export class UpdateSipDomainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSipDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSipDomainPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSipDomainUpdateSipDomainRequest;

  @SpeakeasyMetadata()
  security: UpdateSipDomainSecurity;
}


export class UpdateSipDomainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  routesV2SipDomain?: shared.RoutesV2SipDomain;
}
