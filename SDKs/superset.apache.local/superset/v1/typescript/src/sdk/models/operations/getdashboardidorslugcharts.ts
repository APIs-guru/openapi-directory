import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardIdOrSlugChartsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" })
  idOrSlug: string;
}


export class GetDashboardIdOrSlugChartsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardIdOrSlugChartsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDashboardIdOrSlugChartsPathParams;

  @Metadata()
  security: GetDashboardIdOrSlugChartsSecurity;
}


export class GetDashboardIdOrSlugCharts200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: shared.ChartEntityResponseSchema })
  result?: shared.ChartEntityResponseSchema[];
}


export class GetDashboardIdOrSlugCharts400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugCharts401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugCharts404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugChartsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardIdOrSlugCharts200ApplicationJsonObject?: GetDashboardIdOrSlugCharts200ApplicationJson;

  @Metadata()
  getDashboardIdOrSlugCharts400ApplicationJsonObject?: GetDashboardIdOrSlugCharts400ApplicationJson;

  @Metadata()
  getDashboardIdOrSlugCharts401ApplicationJsonObject?: GetDashboardIdOrSlugCharts401ApplicationJson;

  @Metadata()
  getDashboardIdOrSlugCharts404ApplicationJsonObject?: GetDashboardIdOrSlugCharts404ApplicationJson;

  @Metadata()
  statusCode: number;
}
