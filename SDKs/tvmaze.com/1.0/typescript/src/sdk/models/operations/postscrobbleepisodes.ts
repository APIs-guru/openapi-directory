import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostScrobbleEpisodesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=episode_id" })
  episodeId?: number;

  @Metadata({ data: "json, name=marked_at" })
  markedAt?: number;

  @Metadata({ data: "json, name=type" })
  type?: any;
}


export class PostScrobbleEpisodesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: operations.PostScrobbleEpisodesRequestBody })
  request?: PostScrobbleEpisodesRequestBody[];
}


export class PostScrobbleEpisodesResponse extends SpeakeasyBase {
  @Metadata()
  bulkResponse?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
