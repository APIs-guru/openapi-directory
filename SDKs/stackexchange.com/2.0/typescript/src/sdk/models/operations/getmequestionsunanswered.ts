import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetMeQuestionsUnansweredOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetMeQuestionsUnansweredSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
}


export class GetMeQuestionsUnansweredQueryParams extends SpeakeasyBase {
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
  order?: GetMeQuestionsUnansweredOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetMeQuestionsUnansweredSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetMeQuestionsUnansweredRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMeQuestionsUnansweredQueryParams;
}


export class GetMeQuestionsUnansweredResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
