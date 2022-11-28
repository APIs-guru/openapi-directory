import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIpRecordServerList = [
	"https://voice.twilio.com",
] as const;


export class CreateIpRecordCreateIpRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CidrPrefixLength;" })
  cidrPrefixLength?: number;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=IpAddress;" })
  ipAddress: string;
}


export class CreateIpRecordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIpRecordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIpRecordCreateIpRecordRequest;

  @SpeakeasyMetadata()
  security: CreateIpRecordSecurity;
}


export class CreateIpRecordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
