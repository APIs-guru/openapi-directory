import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTagsTagTopAnswerersPeriodPeriodEnum {
    AllTime = "all_time"
,    Month = "month"
}


export class GetTagsTagTopAnswerersPeriodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: GetTagsTagTopAnswerersPeriodPeriodEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;
}


export class GetTagsTagTopAnswerersPeriodQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetTagsTagTopAnswerersPeriodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsTagTopAnswerersPeriodPathParams;

  @Metadata()
  queryParams: GetTagsTagTopAnswerersPeriodQueryParams;
}


export class GetTagsTagTopAnswerersPeriodResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
