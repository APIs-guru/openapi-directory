import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaylistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=persona_id" })
  personaId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_id" })
  showId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class GetPlaylists200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetPlaylists200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetPlaylists200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Playlist })
  items?: shared.Playlist[];
}


export class GetPlaylistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlaylistsQueryParams;
}


export class GetPlaylistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPlaylists200ApplicationJsonObject?: GetPlaylists200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
