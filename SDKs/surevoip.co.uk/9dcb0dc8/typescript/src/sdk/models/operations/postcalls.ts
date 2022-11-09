import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCallsRequestBodyOptionsPlayAudio extends SpeakeasyBase {
  @Metadata({ data: "json, name=announcement_id" })
  announcementId?: string;
}


export class PostCallsRequestBodyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=a_leg_caller_id" })
  aLegCallerId?: string;

  @Metadata({ data: "json, name=a_leg_only" })
  aLegOnly?: number;

  @Metadata({ data: "json, name=cancel_key" })
  cancelKey?: number;

  @Metadata({ data: "json, name=connect_key" })
  connectKey?: number;

  @Metadata({ data: "json, name=play_audio", elemType: operations.PostCallsRequestBodyOptionsPlayAudio })
  playAudio?: PostCallsRequestBodyOptionsPlayAudio[];
}


export class PostCallsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=announcement_at" })
  announcementAt?: string;

  @Metadata({ data: "json, name=announcement_id" })
  announcementId?: string;

  @Metadata({ data: "json, name=caller_id" })
  callerId: string;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=hangup_announcement_id" })
  hangupAnnouncementId?: string;

  @Metadata({ data: "json, name=hangup_at" })
  hangupAt?: string;

  @Metadata({ data: "json, name=options" })
  options?: PostCallsRequestBodyOptions;

  @Metadata({ data: "json, name=to" })
  to: string;
}


export class PostCallsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostCallsRequestBody;
}


export class PostCalls202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Call" })
  call?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;
}


export class PostCallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  postCalls202ApplicationJsonObject?: PostCalls202ApplicationJson;

  @Metadata()
  statusCode: number;

  @Metadata()
  oneannouncementsPostResponses400ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses400ContentApplication1jsonSchema;

  @Metadata()
  oneannouncementsPostResponses403ContentApplication1jsonSchema?: shared.OneannouncementsPostResponses403ContentApplication1jsonSchema;
}
