import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMeTagsTagsTopQuestionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}

export enum GetMeTagsTagsTopQuestionsOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetMeTagsTagsTopQuestionsSortEnum {
    Activity = "activity",
    Creation = "creation",
    Votes = "votes",
    Hot = "hot",
    Week = "week",
    Month = "month",
    Relevance = "relevance"
}


export class GetMeTagsTagsTopQuestionsQueryParams extends SpeakeasyBase {
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
  order?: GetMeTagsTagsTopQuestionsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetMeTagsTagsTopQuestionsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetMeTagsTagsTopQuestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMeTagsTagsTopQuestionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMeTagsTagsTopQuestionsQueryParams;
}


export class GetMeTagsTagsTopQuestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
