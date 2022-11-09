import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdsSuggestedEditsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetUsersIdsSuggestedEditsOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetUsersIdsSuggestedEditsSortEnum {
    Creation = "creation"
,    Approval = "approval"
,    Rejection = "rejection"
}


export class GetUsersIdsSuggestedEditsQueryParams extends SpeakeasyBase {
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
  order?: GetUsersIdsSuggestedEditsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdsSuggestedEditsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsSuggestedEditsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdsSuggestedEditsPathParams;

  @Metadata()
  queryParams: GetUsersIdsSuggestedEditsQueryParams;
}


export class GetUsersIdsSuggestedEditsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
