import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagsTagsInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}

export enum GetTagsTagsInfoOrderEnum {
    Desc = "desc"
,    Asc = "asc"
}

export enum GetTagsTagsInfoSortEnum {
    Popular = "popular"
,    Activity = "activity"
,    Name = "name"
}


export class GetTagsTagsInfoQueryParams extends SpeakeasyBase {
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
  order?: GetTagsTagsInfoOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetTagsTagsInfoSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetTagsTagsInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsTagsInfoPathParams;

  @Metadata()
  queryParams: GetTagsTagsInfoQueryParams;
}


export class GetTagsTagsInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
