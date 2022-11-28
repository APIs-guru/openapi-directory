import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTagsTagsInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tags" })
  tags: string;
}

export enum GetTagsTagsInfoOrderEnum {
    Desc = "desc",
    Asc = "asc"
}

export enum GetTagsTagsInfoSortEnum {
    Popular = "popular",
    Activity = "activity",
    Name = "name"
}


export class GetTagsTagsInfoQueryParams extends SpeakeasyBase {
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
  order?: GetTagsTagsInfoOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetTagsTagsInfoSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: number;
}


export class GetTagsTagsInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsTagsInfoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTagsTagsInfoQueryParams;
}


export class GetTagsTagsInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
