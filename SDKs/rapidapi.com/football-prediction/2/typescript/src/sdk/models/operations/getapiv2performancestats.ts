import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiV2PerformanceStatsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2PerformanceStatsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiV2PerformanceStatsHeaders;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataAccuracy extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_14_days" })
  last14Days?: number;

  @Metadata({ data: "json, name=last_30_days" })
  last30Days?: number;

  @Metadata({ data: "json, name=last_7_days" })
  last7Days?: number;

  @Metadata({ data: "json, name=yesterday" })
  yesterday?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days extends SpeakeasyBase {
  @Metadata({ data: "json, name=lost" })
  lost?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;

  @Metadata({ data: "json, name=postponed" })
  postponed?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days extends SpeakeasyBase {
  @Metadata({ data: "json, name=lost" })
  lost?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;

  @Metadata({ data: "json, name=postponed" })
  postponed?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days extends SpeakeasyBase {
  @Metadata({ data: "json, name=lost" })
  lost?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;

  @Metadata({ data: "json, name=postponed" })
  postponed?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday extends SpeakeasyBase {
  @Metadata({ data: "json, name=lost" })
  lost?: number;

  @Metadata({ data: "json, name=pending" })
  pending?: number;

  @Metadata({ data: "json, name=postponed" })
  postponed?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=won" })
  won?: number;
}


export class GetApiV2PerformanceStats200ApplicationJsonDataDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_14_days" })
  last14Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast14Days;

  @Metadata({ data: "json, name=last_30_days" })
  last30Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast30Days;

  @Metadata({ data: "json, name=last_7_days" })
  last7Days?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsLast7Days;

  @Metadata({ data: "json, name=yesterday" })
  yesterday?: GetApiV2PerformanceStats200ApplicationJsonDataDetailsYesterday;
}


export class GetApiV2PerformanceStats200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=accuracy" })
  accuracy?: GetApiV2PerformanceStats200ApplicationJsonDataAccuracy;

  @Metadata({ data: "json, name=details" })
  details?: GetApiV2PerformanceStats200ApplicationJsonDataDetails;

  @Metadata({ data: "json, name=market" })
  market?: string;
}


export class GetApiV2PerformanceStats200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: GetApiV2PerformanceStats200ApplicationJsonData;
}


export class GetApiV2PerformanceStats404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: Map<string, any>;
}


export class GetApiV2PerformanceStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getApiV2PerformanceStats200ApplicationJsonObject?: GetApiV2PerformanceStats200ApplicationJson;

  @Metadata()
  getApiV2PerformanceStats404ApplicationJsonObject?: GetApiV2PerformanceStats404ApplicationJson;

  @Metadata()
  statusCode: number;
}
