import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartFavoriteStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class GetChartFavoriteStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartFavoriteStatus400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatus401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatus404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatus500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartFavoriteStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChartFavoriteStatusQueryParams;

  @SpeakeasyMetadata()
  security: GetChartFavoriteStatusSecurity;
}


export class GetChartFavoriteStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartFavoriteStatus400ApplicationJsonObject?: GetChartFavoriteStatus400ApplicationJson;

  @SpeakeasyMetadata()
  getChartFavoriteStatus401ApplicationJsonObject?: GetChartFavoriteStatus401ApplicationJson;

  @SpeakeasyMetadata()
  getChartFavoriteStatus404ApplicationJsonObject?: GetChartFavoriteStatus404ApplicationJson;

  @SpeakeasyMetadata()
  getChartFavoriteStatus500ApplicationJsonObject?: GetChartFavoriteStatus500ApplicationJson;

  @SpeakeasyMetadata()
  getFavStarIdsSchema?: shared.GetFavStarIdsSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
