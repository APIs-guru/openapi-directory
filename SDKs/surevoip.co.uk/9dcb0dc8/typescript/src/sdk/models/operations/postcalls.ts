import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCallsRequestBodyOptionsPlayAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=announcement_id" })
  announcementId?: string;
}


export class PostCallsRequestBodyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=a_leg_caller_id" })
  aLegCallerId?: string;

  @SpeakeasyMetadata({ data: "json, name=a_leg_only" })
  aLegOnly?: number;

  @SpeakeasyMetadata({ data: "json, name=cancel_key" })
  cancelKey?: number;

  @SpeakeasyMetadata({ data: "json, name=connect_key" })
  connectKey?: number;

  @SpeakeasyMetadata({ data: "json, name=play_audio", elemType: PostCallsRequestBodyOptionsPlayAudio })
  playAudio?: PostCallsRequestBodyOptionsPlayAudio[];
}


export class PostCallsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=announcement_at" })
  announcementAt?: string;

  @SpeakeasyMetadata({ data: "json, name=announcement_id" })
  announcementId?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_id" })
  callerId: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=hangup_announcement_id" })
  hangupAnnouncementId?: string;

  @SpeakeasyMetadata({ data: "json, name=hangup_at" })
  hangupAt?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: PostCallsRequestBodyOptions;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}


export class PostCalls202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Call" })
  call?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;
}


export class PostCallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostCallsRequestBody;
}


export class PostCallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  postCalls202ApplicationJsonObject?: PostCalls202ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses400ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses400ContentApplication1jsonSchema;

  @SpeakeasyMetadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
