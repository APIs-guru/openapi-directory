import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUsersIdsMentionedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetUsersIdsMentionedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetUsersIdsMentionedSortEnum {
    Creation = "creation",
    Votes = "votes"
}


export class GetUsersIdsMentionedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min" })
  min?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: GetUsersIdsMentionedOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdsMentionedSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsMentionedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdsMentionedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdsMentionedQueryParams;
}


export class GetUsersIdsMentionedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
