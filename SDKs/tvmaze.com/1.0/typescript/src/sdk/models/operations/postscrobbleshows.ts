import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostScrobbleShowsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imdb_id" })
  imdbId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=thetvdb_id" })
  thetvdbId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tvmaze_id" })
  tvmazeId?: number;
}


export class PostScrobbleShowsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airdate" })
  airdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=episode" })
  episode?: number;

  @SpeakeasyMetadata({ data: "json, name=marked_at" })
  markedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=season" })
  season?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: any;
}


export class PostScrobbleShowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostScrobbleShowsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: PostScrobbleShowsRequestBody })
  request?: PostScrobbleShowsRequestBody[];
}


export class PostScrobbleShowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkResponse?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
