import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardFavoriteStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetDashboardFavoriteStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardFavoriteStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDashboardFavoriteStatusQueryParams;

  @Metadata()
  security: GetDashboardFavoriteStatusSecurity;
}


export class GetDashboardFavoriteStatus400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatus401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatus404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatus500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardFavoriteStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardFavoriteStatus400ApplicationJsonObject?: GetDashboardFavoriteStatus400ApplicationJson;

  @Metadata()
  getDashboardFavoriteStatus401ApplicationJsonObject?: GetDashboardFavoriteStatus401ApplicationJson;

  @Metadata()
  getDashboardFavoriteStatus404ApplicationJsonObject?: GetDashboardFavoriteStatus404ApplicationJson;

  @Metadata()
  getDashboardFavoriteStatus500ApplicationJsonObject?: GetDashboardFavoriteStatus500ApplicationJson;

  @Metadata()
  getFavStarIdsSchema?: shared.GetFavStarIdsSchema;

  @Metadata()
  statusCode: number;
}
