import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMeCommentsToIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=toId" })
  toId: number;
}

export enum GetMeCommentsToIdOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetMeCommentsToIdSortEnum {
    Creation = "creation"
,    Votes = "votes"
}


export class GetMeCommentsToIdQueryParams extends SpeakeasyBase {
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
  order?: GetMeCommentsToIdOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetMeCommentsToIdSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetMeCommentsToIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMeCommentsToIdPathParams;

  @Metadata()
  queryParams: GetMeCommentsToIdQueryParams;
}


export class GetMeCommentsToIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
