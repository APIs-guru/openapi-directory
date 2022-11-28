import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpinsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playlist_id" })
  playlistId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_id" })
  showId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class GetSpins200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetSpins200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetSpins200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Spin })
  items?: shared.Spin[];
}


export class GetSpinsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSpinsQueryParams;
}


export class GetSpinsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSpins200ApplicationJsonObject?: GetSpins200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
