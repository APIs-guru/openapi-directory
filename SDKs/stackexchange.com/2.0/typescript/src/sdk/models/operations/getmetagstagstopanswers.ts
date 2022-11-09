import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMeTagsTagsTopAnswersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}

export enum GetMeTagsTagsTopAnswersOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetMeTagsTagsTopAnswersSortEnum {
    Activity = "activity"
,    Creation = "creation"
,    Votes = "votes"
}


export class GetMeTagsTagsTopAnswersQueryParams extends SpeakeasyBase {
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
  order?: GetMeTagsTagsTopAnswersOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetMeTagsTagsTopAnswersSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetMeTagsTagsTopAnswersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMeTagsTagsTopAnswersPathParams;

  @Metadata()
  queryParams: GetMeTagsTagsTopAnswersQueryParams;
}


export class GetMeTagsTagsTopAnswersResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
