import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartFavoriteStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetChartFavoriteStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartFavoriteStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChartFavoriteStatusQueryParams;

  @Metadata()
  security: GetChartFavoriteStatusSecurity;
}


export class GetChartFavoriteStatus400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatus401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatus404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatus500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChartFavoriteStatus400ApplicationJsonObject?: GetChartFavoriteStatus400ApplicationJson;

  @Metadata()
  getChartFavoriteStatus401ApplicationJsonObject?: GetChartFavoriteStatus401ApplicationJson;

  @Metadata()
  getChartFavoriteStatus404ApplicationJsonObject?: GetChartFavoriteStatus404ApplicationJson;

  @Metadata()
  getChartFavoriteStatus500ApplicationJsonObject?: GetChartFavoriteStatus500ApplicationJson;

  @Metadata()
  getFavStarIdsSchema?: shared.GetFavStarIdsSchema;

  @Metadata()
  statusCode: number;
}
