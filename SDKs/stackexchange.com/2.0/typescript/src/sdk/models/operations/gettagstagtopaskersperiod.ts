import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTagsTagTopAskersPeriodPeriodEnum {
    AllTime = "all_time",
    Month = "month"
}


export class GetTagsTagTopAskersPeriodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: GetTagsTagTopAskersPeriodPeriodEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;
}


export class GetTagsTagTopAskersPeriodQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetTagsTagTopAskersPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsTagTopAskersPeriodPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTagsTagTopAskersPeriodQueryParams;
}


export class GetTagsTagTopAskersPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
