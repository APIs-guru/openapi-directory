import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShowsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: Date;
}


export class GetShows200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: shared.Link;
}


export class GetShows200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetShows200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=_meta" })
  meta?: shared.Pagination;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.Show })
  items?: shared.Show[];
}


export class GetShowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetShowsQueryParams;
}


export class GetShowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  getShows200ApplicationJsonObject?: GetShows200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
