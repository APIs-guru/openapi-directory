import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESOURCEIPMAPPING_SERVERS = [
	"https://voice.twilio.com",
];



export class CreateSourceIpMappingCreateSourceIpMappingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=IpRecordSid;" })
  ipRecordSid: string;

  @Metadata({ data: "form, name=SipDomainSid;" })
  sipDomainSid: string;
}


export class CreateSourceIpMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSourceIpMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSourceIpMappingCreateSourceIpMappingRequest;

  @Metadata()
  security: CreateSourceIpMappingSecurity;
}


export class CreateSourceIpMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
