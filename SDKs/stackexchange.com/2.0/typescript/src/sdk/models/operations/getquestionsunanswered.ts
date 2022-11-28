import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetQuestionsUnansweredOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetQuestionsUnansweredSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes"
}


export class GetQuestionsUnansweredQueryParams extends SpeakeasyBase {
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
  order?: GetQuestionsUnansweredOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetQuestionsUnansweredSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagged" })
  tagged?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetQuestionsUnansweredRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuestionsUnansweredQueryParams;
}


export class GetQuestionsUnansweredResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
