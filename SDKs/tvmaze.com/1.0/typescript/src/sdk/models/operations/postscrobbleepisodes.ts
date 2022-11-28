import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostScrobbleEpisodesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=episode_id" })
  episodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=marked_at" })
  markedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;
}


export class PostScrobbleEpisodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: PostScrobbleEpisodesRequestBody })
  request?: PostScrobbleEpisodesRequestBody[];
}


export class PostScrobbleEpisodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkResponse?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
