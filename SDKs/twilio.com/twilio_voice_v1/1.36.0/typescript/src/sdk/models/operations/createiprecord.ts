import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEIPRECORD_SERVERS = [
	"https://voice.twilio.com",
];



export class CreateIpRecordCreateIpRecordRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CidrPrefixLength;" })
  cidrPrefixLength?: number;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=IpAddress;" })
  ipAddress: string;
}


export class CreateIpRecordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIpRecordRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIpRecordCreateIpRecordRequest;

  @Metadata()
  security: CreateIpRecordSecurity;
}


export class CreateIpRecordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
