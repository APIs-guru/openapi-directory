import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagsTagsSynonymsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}

export enum GetTagsTagsSynonymsOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetTagsTagsSynonymsSortEnum {
    Creation = "creation"
,    Applied = "applied"
,    Activity = "activity"
}


export class GetTagsTagsSynonymsQueryParams extends SpeakeasyBase {
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
  order?: GetTagsTagsSynonymsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetTagsTagsSynonymsSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetTagsTagsSynonymsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsTagsSynonymsPathParams;

  @Metadata()
  queryParams: GetTagsTagsSynonymsQueryParams;
}


export class GetTagsTagsSynonymsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
