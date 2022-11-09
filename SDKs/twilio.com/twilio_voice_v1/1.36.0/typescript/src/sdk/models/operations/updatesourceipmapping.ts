import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESOURCEIPMAPPING_SERVERS = [
	"https://voice.twilio.com",
];



export class UpdateSourceIpMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSourceIpMappingUpdateSourceIpMappingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=SipDomainSid;" })
  sipDomainSid: string;
}


export class UpdateSourceIpMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSourceIpMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSourceIpMappingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSourceIpMappingUpdateSourceIpMappingRequest;

  @Metadata()
  security: UpdateSourceIpMappingSecurity;
}


export class UpdateSourceIpMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
