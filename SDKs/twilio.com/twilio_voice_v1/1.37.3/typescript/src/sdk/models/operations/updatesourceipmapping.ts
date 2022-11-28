import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSourceIpMappingServerList = [
	"https://voice.twilio.com",
] as const;


export class UpdateSourceIpMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSourceIpMappingUpdateSourceIpMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=SipDomainSid;" })
  sipDomainSid: string;
}


export class UpdateSourceIpMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSourceIpMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSourceIpMappingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSourceIpMappingUpdateSourceIpMappingRequest;

  @SpeakeasyMetadata()
  security: UpdateSourceIpMappingSecurity;
}


export class UpdateSourceIpMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
