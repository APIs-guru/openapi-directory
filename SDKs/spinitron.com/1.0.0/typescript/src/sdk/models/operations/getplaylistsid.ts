import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlaylistsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPlaylistsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];
}


export class GetPlaylistsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlaylistsIdPathParams;

  @Metadata()
  queryParams: GetPlaylistsIdQueryParams;
}


export class GetPlaylistsIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  playlist?: shared.Playlist;

  @Metadata()
  statusCode: number;
}
