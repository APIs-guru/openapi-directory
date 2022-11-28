import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchRecordingServerList = [
	"https://trunking.twilio.com",
] as const;


export class FetchRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class FetchRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchRecordingPathParams;

  @SpeakeasyMetadata()
  security: FetchRecordingSecurity;
}


export class FetchRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkRecording?: shared.TrunkingV1TrunkRecording;
}
