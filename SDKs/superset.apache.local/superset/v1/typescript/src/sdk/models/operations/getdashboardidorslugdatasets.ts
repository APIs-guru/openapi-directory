import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardIdOrSlugDatasetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" })
  idOrSlug: string;
}


export class GetDashboardIdOrSlugDatasetsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardIdOrSlugDatasets200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.DashboardDatasetSchema })
  result?: shared.DashboardDatasetSchema[];
}


export class GetDashboardIdOrSlugDatasets400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugDatasets401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugDatasets404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardIdOrSlugDatasetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDashboardIdOrSlugDatasetsPathParams;

  @SpeakeasyMetadata()
  security: GetDashboardIdOrSlugDatasetsSecurity;
}


export class GetDashboardIdOrSlugDatasetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugDatasets200ApplicationJsonObject?: GetDashboardIdOrSlugDatasets200ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugDatasets400ApplicationJsonObject?: GetDashboardIdOrSlugDatasets400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugDatasets401ApplicationJsonObject?: GetDashboardIdOrSlugDatasets401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardIdOrSlugDatasets404ApplicationJsonObject?: GetDashboardIdOrSlugDatasets404ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
