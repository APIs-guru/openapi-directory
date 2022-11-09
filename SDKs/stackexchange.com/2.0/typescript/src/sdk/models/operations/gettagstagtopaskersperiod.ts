import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetTagsTagTopAskersPeriodPeriodEnum {
    AllTime = "all_time"
,    Month = "month"
}


export class GetTagsTagTopAskersPeriodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=period" })
  period: GetTagsTagTopAskersPeriodPeriodEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;
}


export class GetTagsTagTopAskersPeriodQueryParams extends SpeakeasyBase {
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


export class GetTagsTagTopAskersPeriodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagsTagTopAskersPeriodPathParams;

  @Metadata()
  queryParams: GetTagsTagTopAskersPeriodQueryParams;
}


export class GetTagsTagTopAskersPeriodResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
