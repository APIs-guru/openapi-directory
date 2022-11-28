import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUsersIdsQuestionsUnacceptedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetUsersIdsQuestionsUnacceptedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetUsersIdsQuestionsUnacceptedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}


export class GetUsersIdsQuestionsUnacceptedQueryParams extends SpeakeasyBase {
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
  order?: GetUsersIdsQuestionsUnacceptedOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdsQuestionsUnacceptedSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdsQuestionsUnacceptedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersIdsQuestionsUnacceptedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersIdsQuestionsUnacceptedQueryParams;
}


export class GetUsersIdsQuestionsUnacceptedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
