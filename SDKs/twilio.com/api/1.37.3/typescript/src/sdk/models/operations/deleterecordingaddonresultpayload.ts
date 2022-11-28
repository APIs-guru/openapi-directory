import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteRecordingAddOnResultPayloadServerList = [
	"https://api.twilio.com",
] as const;


export class DeleteRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AddOnResultSid" })
  addOnResultSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" })
  referenceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteRecordingAddOnResultPayloadPathParams;

  @SpeakeasyMetadata()
  security: DeleteRecordingAddOnResultPayloadSecurity;
}


export class DeleteRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
