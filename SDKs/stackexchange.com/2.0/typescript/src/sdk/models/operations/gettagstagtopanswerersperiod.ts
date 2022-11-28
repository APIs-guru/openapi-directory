import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetTagsTagTopAnswerersPeriodPeriodEnum {
    AllTime = "all_time",
    Month = "month"
}


export class GetTagsTagTopAnswerersPeriodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: GetTagsTagTopAnswerersPeriodPeriodEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;
}


export class GetTagsTagTopAnswerersPeriodQueryParams extends SpeakeasyBase {
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


export class GetTagsTagTopAnswerersPeriodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTagsTagTopAnswerersPeriodPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTagsTagTopAnswerersPeriodQueryParams;
}


export class GetTagsTagTopAnswerersPeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
