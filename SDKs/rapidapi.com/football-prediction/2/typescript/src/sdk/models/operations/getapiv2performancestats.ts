import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV2PerformanceStatsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataAccuracy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_14_days" })
  last14Days?: number;

  @SpeakeasyMetadata({ data: "json, name=last_30_days" })
  last30Days?: number;

  @SpeakeasyMetadata({ data: "json, name=last_7_days" })
  last7Days?: number;

  @SpeakeasyMetadata({ data: "json, name=yesterday" })
  yesterday?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lost" })
  lost?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=postponed" })
  postponed?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lost" })
  lost?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=postponed" })
  postponed?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lost" })
  lost?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=postponed" })
  postponed?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lost" })
  lost?: number;

  @SpeakeasyMetadata({ data: "json, name=pending" })
  pending?: number;

  @SpeakeasyMetadata({ data: "json, name=postponed" })
  postponed?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_14_days" })
  last14Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days;

  @SpeakeasyMetadata({ data: "json, name=last_30_days" })
  last30Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days;

  @SpeakeasyMetadata({ data: "json, name=last_7_days" })
  last7Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days;

  @SpeakeasyMetadata({ data: "json, name=yesterday" })
  yesterday?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday;
}


export class GetApiV2PerformanceStats200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accuracy" })
  accuracy?: GetApiV2PerformanceStats200ApplicationJsonDataAccuracy;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: GetApiV2PerformanceStats200ApplicationJsonDataDetails;

  @SpeakeasyMetadata({ data: "json, name=market" })
  market?: string;
}


export class GetApiV2PerformanceStats200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetApiV2PerformanceStats200ApplicationJsonData;
}


export class GetApiV2PerformanceStats404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2PerformanceStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiV2PerformanceStatsHeaders;
}


export class GetApiV2PerformanceStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getApiV2PerformanceStats200ApplicationJsonObject?: GetApiV2PerformanceStats200ApplicationJson;

  @SpeakeasyMetadata()
  getApiV2PerformanceStats404ApplicationJsonObject?: GetApiV2PerformanceStats404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
