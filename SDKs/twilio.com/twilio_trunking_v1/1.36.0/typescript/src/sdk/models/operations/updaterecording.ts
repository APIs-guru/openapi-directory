import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATERECORDING_SERVERS = [
	"https://trunking.twilio.com",
];



export class UpdateRecordingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class UpdateRecordingUpdateRecordingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Mode;" })
  mode?: shared.RecordingEnumRecordingModeEnum;

  @Metadata({ data: "form, name=Trim;" })
  trim?: shared.RecordingEnumRecordingTrimEnum;
}


export class UpdateRecordingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRecordingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRecordingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRecordingUpdateRecordingRequest;

  @Metadata()
  security: UpdateRecordingSecurity;
}


export class UpdateRecordingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1TrunkRecording?: shared.TrunkingV1TrunkRecording;
}
