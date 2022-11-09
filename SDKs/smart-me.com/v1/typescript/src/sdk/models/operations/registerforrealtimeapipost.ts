import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterForRealtimeApiPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  registerRealtimeApiData?: shared.RegisterRealtimeApiData;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  registerRealtimeApiData1?: shared.RegisterRealtimeApiData;

  @Metadata({ data: "request, media_type=text/json" })
  registerRealtimeApiData2?: shared.RegisterRealtimeApiData;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class RegisterForRealtimeApiPostRequest extends SpeakeasyBase {
  @Metadata()
  request: RegisterForRealtimeApiPostRequests;
}


export class RegisterForRealtimeApiPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
