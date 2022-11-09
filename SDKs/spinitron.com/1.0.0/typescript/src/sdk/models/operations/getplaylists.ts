import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlaylistsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=persona_id" })
  personaId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=show_id" })
  showId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class GetPlaylistsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlaylistsQueryParams;
}


export class GetPlaylists200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetPlaylists200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: GetPlaylists200ApplicationJsonLinks;

  @Metadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @Metadata({ data: "json, name=items", elemType: shared.Playlist })
  items?: shared.Playlist[];
}


export class GetPlaylistsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getPlaylists200ApplicationJsonObject?: GetPlaylists200ApplicationJson;

  @Metadata()
  statusCode: number;
}
