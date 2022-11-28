import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSourceIpMappingServerList = [
	"https://voice.twilio.com",
] as const;


export class CreateSourceIpMappingCreateSourceIpMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=IpRecordSid;" })
  ipRecordSid: string;

  @SpeakeasyMetadata({ data: "form, name=SipDomainSid;" })
  sipDomainSid: string;
}


export class CreateSourceIpMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSourceIpMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSourceIpMappingCreateSourceIpMappingRequest;

  @SpeakeasyMetadata()
  security: CreateSourceIpMappingSecurity;
}


export class CreateSourceIpMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
