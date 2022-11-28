import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMeQuestionsUnacceptedOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetMeQuestionsUnacceptedSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}


export class GetMeQuestionsUnacceptedQueryParams extends SpeakeasyBase {
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
  order?: GetMeQuestionsUnacceptedOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetMeQuestionsUnacceptedSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetMeQuestionsUnacceptedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeQuestionsUnacceptedQueryParams;
}


export class GetMeQuestionsUnacceptedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
