import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQuestionsIdsLinkedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetQuestionsIdsLinkedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetQuestionsIdsLinkedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Rank = "rank"
}


export class GetQuestionsIdsLinkedQueryParams extends SpeakeasyBase {
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
  order?: GetQuestionsIdsLinkedOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetQuestionsIdsLinkedSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetQuestionsIdsLinkedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQuestionsIdsLinkedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQuestionsIdsLinkedQueryParams;
}


export class GetQuestionsIdsLinkedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
