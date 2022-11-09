import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostScrobbleShowsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imdb_id" })
  imdbId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=thetvdb_id" })
  thetvdbId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tvmaze_id" })
  tvmazeId?: number;
}


export class PostScrobbleShowsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=airdate" })
  airdate?: Date;

  @Metadata({ data: "json, name=episode" })
  episode?: number;

  @Metadata({ data: "json, name=marked_at" })
  markedAt?: number;

  @Metadata({ data: "json, name=season" })
  season?: number;

  @Metadata({ data: "json, name=type" })
  type?: any;
}


export class PostScrobbleShowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostScrobbleShowsQueryParams;

  @Metadata({ data: "request, media_type=application/json", elemType: operations.PostScrobbleShowsRequestBody })
  request?: PostScrobbleShowsRequestBody[];
}


export class PostScrobbleShowsResponse extends SpeakeasyBase {
  @Metadata()
  bulkResponse?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
