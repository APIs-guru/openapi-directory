import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdsMentionedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetUsersIdsMentionedOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetUsersIdsMentionedSortEnum {
    Creation = "creation"
,    Votes = "votes"
}


export class GetUsersIdsMentionedQueryParams extends SpeakeasyBase {
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
  order?: GetUsersIdsMentionedOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdsMentionedSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsMentionedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdsMentionedPathParams;

  @Metadata()
  queryParams: GetUsersIdsMentionedQueryParams;
}


export class GetUsersIdsMentionedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
