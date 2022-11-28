import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AnalyticsGroupByEnum {
    Date = "date",
    Label = "label",
    Subaccount = "subaccount",
    Country = "country"
}


export class AnalyticsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_by" })
  groupBy?: AnalyticsGroupByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subaccounts" })
  subaccounts?: string;
}


export class Analytics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=direct" })
  direct?: number;

  @SpeakeasyMetadata({ data: "json, name=economy" })
  economy?: number;

  @SpeakeasyMetadata({ data: "json, name=hlr" })
  hlr?: number;

  @SpeakeasyMetadata({ data: "json, name=inbound" })
  inbound?: number;

  @SpeakeasyMetadata({ data: "json, name=mnp" })
  mnp?: number;

  @SpeakeasyMetadata({ data: "json, name=usage_eur" })
  usageEur?: number;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: number;
}


export class AnalyticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AnalyticsQueryParams;
}


export class AnalyticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analytics200ApplicationJsonObject?: Analytics200ApplicationJson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
