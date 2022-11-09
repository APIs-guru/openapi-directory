import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdsBadgesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetUsersIdsBadgesOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetUsersIdsBadgesSortEnum {
    Rank = "rank"
,    Name = "name"
,    Type = "type"
,    Awarded = "awarded"
}


export class GetUsersIdsBadgesQueryParams extends SpeakeasyBase {
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
  order?: GetUsersIdsBadgesOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdsBadgesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsBadgesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdsBadgesPathParams;

  @Metadata()
  queryParams: GetUsersIdsBadgesQueryParams;
}


export class GetUsersIdsBadgesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
