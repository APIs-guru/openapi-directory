import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdsFavoritesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetUsersIdsFavoritesOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetUsersIdsFavoritesSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
,    Added = "added"
}


export class GetUsersIdsFavoritesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetUsersIdsFavoritesOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdsFavoritesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsFavoritesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdsFavoritesPathParams;

  @Metadata()
  queryParams: GetUsersIdsFavoritesQueryParams;
}


export class GetUsersIdsFavoritesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
