import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterForRealtimeApiPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  registerRealtimeApiData?: shared.RegisterRealtimeApiData;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  registerRealtimeApiData1?: shared.RegisterRealtimeApiData;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  registerRealtimeApiData2?: shared.RegisterRealtimeApiData;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RegisterForRealtimeApiPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: RegisterForRealtimeApiPostRequests;
}


export class RegisterForRealtimeApiPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
