import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateRecordingServerList = [
	"https://trunking.twilio.com",
] as const;


export class UpdateRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class UpdateRecordingUpdateRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Mode;" })
  mode?: shared.RecordingEnumRecordingModeEnum;

  @SpeakeasyMetadata({ data: "form, name=Trim;" })
  trim?: shared.RecordingEnumRecordingTrimEnum;
}


export class UpdateRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateRecordingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRecordingUpdateRecordingRequest;

  @SpeakeasyMetadata()
  security: UpdateRecordingSecurity;
}


export class UpdateRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkRecording?: shared.TrunkingV1TrunkRecording;
}
