import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdsCommentsToidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=toid" })
  toid: number;
}

export enum GetUsersIdsCommentsToidOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetUsersIdsCommentsToidSortEnum {
    Creation = "creation"
,    Votes = "votes"
}


export class GetUsersIdsCommentsToidQueryParams extends SpeakeasyBase {
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
  order?: GetUsersIdsCommentsToidOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdsCommentsToidSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsCommentsToidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdsCommentsToidPathParams;

  @Metadata()
  queryParams: GetUsersIdsCommentsToidQueryParams;
}


export class GetUsersIdsCommentsToidResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
