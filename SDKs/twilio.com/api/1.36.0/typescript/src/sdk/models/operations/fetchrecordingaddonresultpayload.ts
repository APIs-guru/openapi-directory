import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHRECORDINGADDONRESULTPAYLOAD_SERVERS = [
	"https://api.twilio.com",
];



export class FetchRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=AddOnResultSid" })
  addOnResultSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReferenceSid" })
  referenceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchRecordingAddOnResultPayloadPathParams;

  @Metadata()
  security: FetchRecordingAddOnResultPayloadSecurity;
}


export class FetchRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload;
}
