import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetMeQuestionsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetMeQuestionsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}


export class GetMeQuestionsQueryParams extends SpeakeasyBase {
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
  order?: GetMeQuestionsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetMeQuestionsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetMeQuestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeQuestionsQueryParams;
}


export class GetMeQuestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
