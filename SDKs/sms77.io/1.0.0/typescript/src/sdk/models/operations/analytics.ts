import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AnalyticsGroupByEnum {
    Date = "date"
,    Label = "label"
,    Subaccount = "subaccount"
,    Country = "country"
}


export class AnalyticsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_by" })
  groupBy?: AnalyticsGroupByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subaccounts" })
  subaccounts?: string;
}


export class AnalyticsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AnalyticsQueryParams;
}


export class Analytics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=direct" })
  direct?: number;

  @Metadata({ data: "json, name=economy" })
  economy?: number;

  @Metadata({ data: "json, name=hlr" })
  hlr?: number;

  @Metadata({ data: "json, name=inbound" })
  inbound?: number;

  @Metadata({ data: "json, name=mnp" })
  mnp?: number;

  @Metadata({ data: "json, name=usage_eur" })
  usageEur?: number;

  @Metadata({ data: "json, name=voice" })
  voice?: number;
}


export class AnalyticsResponse extends SpeakeasyBase {
  @Metadata()
  analytics200ApplicationJsonObject?: Analytics200ApplicationJson;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
