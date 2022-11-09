import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQuestionsIdsRelatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetQuestionsIdsRelatedOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetQuestionsIdsRelatedSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
,    Rank = "rank"
}


export class GetQuestionsIdsRelatedQueryParams extends SpeakeasyBase {
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
  order?: GetQuestionsIdsRelatedOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetQuestionsIdsRelatedSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetQuestionsIdsRelatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQuestionsIdsRelatedPathParams;

  @Metadata()
  queryParams: GetQuestionsIdsRelatedQueryParams;
}


export class GetQuestionsIdsRelatedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
