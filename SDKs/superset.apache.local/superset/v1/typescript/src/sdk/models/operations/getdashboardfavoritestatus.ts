import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardFavoriteStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDashboardFavoriteStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardFavoriteStatus400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatus401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatus404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatus500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDashboardFavoriteStatusQueryParams;

  @SpeakeasyMetadata()
  security: GetDashboardFavoriteStatusSecurity;
}


export class GetDashboardFavoriteStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardFavoriteStatus400ApplicationJsonObject?: GetDashboardFavoriteStatus400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardFavoriteStatus401ApplicationJsonObject?: GetDashboardFavoriteStatus401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardFavoriteStatus404ApplicationJsonObject?: GetDashboardFavoriteStatus404ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardFavoriteStatus500ApplicationJsonObject?: GetDashboardFavoriteStatus500ApplicationJson;

  @SpeakeasyMetadata()
  getFavStarIdsSchema?: shared.GetFavStarIdsSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
