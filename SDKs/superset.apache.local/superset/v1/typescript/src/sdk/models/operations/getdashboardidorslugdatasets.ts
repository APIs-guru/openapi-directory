import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardIdOrSlugDatasetsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" })
  idOrSlug: string;
}


export class GetDashboardIdOrSlugDatasetsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardIdOrSlugDatasetsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDashboardIdOrSlugDatasetsPathParams;

  @Metadata()
  security: GetDashboardIdOrSlugDatasetsSecurity;
}


export class GetDashboardIdOrSlugDatasets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: shared.DashboardDatasetSchema })
  result?: shared.DashboardDatasetSchema[];
}


export class GetDashboardIdOrSlugDatasets400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugDatasets401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugDatasets404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugDatasetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardIdOrSlugDatasets200ApplicationJsonObject?: GetDashboardIdOrSlugDatasets200ApplicationJson;

  @Metadata()
  getDashboardIdOrSlugDatasets400ApplicationJsonObject?: GetDashboardIdOrSlugDatasets400ApplicationJson;

  @Metadata()
  getDashboardIdOrSlugDatasets401ApplicationJsonObject?: GetDashboardIdOrSlugDatasets401ApplicationJson;

  @Metadata()
  getDashboardIdOrSlugDatasets404ApplicationJsonObject?: GetDashboardIdOrSlugDatasets404ApplicationJson;

  @Metadata()
  statusCode: number;
}
