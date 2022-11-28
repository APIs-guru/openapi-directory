import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiV1HeartBeatRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  heartBeatBody?: shared.HeartBeatBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  heartBeatBody1?: shared.HeartBeatBody;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  heartBeatBody2?: shared.HeartBeatBody;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  heartBeatBody3?: shared.HeartBeatBody;
}


export class PostApiV1HeartBeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostApiV1HeartBeatRequests;
}


export class PostApiV1HeartBeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
