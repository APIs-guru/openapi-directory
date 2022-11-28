import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardIdOrSlugChartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" })
  idOrSlug: string;
}


export class GetDashboardIdOrSlugChartsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardIdOrSlugCharts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.ChartEntityResponseSchema })
  result?: shared.ChartEntityResponseSchema[];
}


export class GetDashboardIdOrSlugCharts400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugCharts401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugCharts404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugChartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDashboardIdOrSlugChartsPathParams;

  @SpeakeasyMetadata()
  security: GetDashboardIdOrSlugChartsSecurity;
}


export class GetDashboardIdOrSlugChartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugCharts200ApplicationJsonObject?: GetDashboardIdOrSlugCharts200ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugCharts400ApplicationJsonObject?: GetDashboardIdOrSlugCharts400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugCharts401ApplicationJsonObject?: GetDashboardIdOrSlugCharts401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugCharts404ApplicationJsonObject?: GetDashboardIdOrSlugCharts404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
