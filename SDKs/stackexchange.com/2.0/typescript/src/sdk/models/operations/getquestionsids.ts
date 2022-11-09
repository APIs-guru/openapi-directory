import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQuestionsIdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string;
}

export enum GetQuestionsIdsOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetQuestionsIdsSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
}


export class GetQuestionsIdsQueryParams extends SpeakeasyBase {
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
  order?: GetQuestionsIdsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetQuestionsIdsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetQuestionsIdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQuestionsIdsPathParams;

  @Metadata()
  queryParams: GetQuestionsIdsQueryParams;
}


export class GetQuestionsIdsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
