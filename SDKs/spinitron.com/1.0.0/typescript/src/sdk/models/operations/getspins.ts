import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpinsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=playlist_id" })
  playlistId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=show_id" })
  showId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class GetSpinsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSpinsQueryParams;
}


export class GetSpins200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetSpins200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: GetSpins200ApplicationJsonLinks;

  @Metadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @Metadata({ data: "json, name=items", elemType: shared.Spin })
  items?: shared.Spin[];
}


export class GetSpinsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getSpins200ApplicationJsonObject?: GetSpins200ApplicationJson;

  @Metadata()
  statusCode: number;
}
