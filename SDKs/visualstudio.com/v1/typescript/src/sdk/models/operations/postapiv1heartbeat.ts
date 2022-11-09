import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiV1HeartBeatRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  heartBeatBody?: shared.HeartBeatBody;

  @Metadata({ data: "request, media_type=application/json" })
  heartBeatBody1?: shared.HeartBeatBody;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  heartBeatBody2?: shared.HeartBeatBody;

  @Metadata({ data: "request, media_type=text/json" })
  heartBeatBody3?: shared.HeartBeatBody;
}


export class PostApiV1HeartBeatRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostApiV1HeartBeatRequests;
}


export class PostApiV1HeartBeatResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
