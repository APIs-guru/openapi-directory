import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUsersIdTagsTagsTopQuestionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}

export enum GetUsersIdTagsTagsTopQuestionsOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetUsersIdTagsTagsTopQuestionsSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
}


export class GetUsersIdTagsTagsTopQuestionsQueryParams extends SpeakeasyBase {
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
  order?: GetUsersIdTagsTagsTopQuestionsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetUsersIdTagsTagsTopQuestionsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetUsersIdTagsTagsTopQuestionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersIdTagsTagsTopQuestionsPathParams;

  @Metadata()
  queryParams: GetUsersIdTagsTagsTopQuestionsQueryParams;
}


export class GetUsersIdTagsTagsTopQuestionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
