import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetShowsQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class GetShowsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetShowsQueryParams;
}


export class GetShows200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetShows200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: GetShows200ApplicationJsonLinks;

  @Metadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @Metadata({ data: "json, name=items", elemType: shared.Show })
  items?: shared.Show[];
}


export class GetShowsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  getShows200ApplicationJsonObject?: GetShows200ApplicationJson;

  @Metadata()
  statusCode: number;
}
