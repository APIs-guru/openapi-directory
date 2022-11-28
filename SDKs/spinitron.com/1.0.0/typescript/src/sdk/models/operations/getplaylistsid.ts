import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaylistsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPlaylistsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string[];
}


export class GetPlaylistsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlaylistsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlaylistsIdQueryParams;
}


export class GetPlaylistsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  playlist?: shared.Playlist;

  @SpeakeasyMetadata()
  statusCode: number;
}
