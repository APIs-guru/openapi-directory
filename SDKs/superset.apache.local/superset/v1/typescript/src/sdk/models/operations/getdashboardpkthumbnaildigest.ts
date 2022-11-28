import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardPkThumbnailDigestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digest" })
  digest: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDashboardPkThumbnailDigestQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.ThumbnailQuerySchema;
}


export class GetDashboardPkThumbnailDigestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardPkThumbnailDigest202ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDashboardPkThumbnailDigestPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDashboardPkThumbnailDigestQueryParams;

  @SpeakeasyMetadata()
  security: GetDashboardPkThumbnailDigestSecurity;
}


export class GetDashboardPkThumbnailDigestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardPkThumbnailDigest200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getDashboardPkThumbnailDigest202ApplicationJsonObject?: GetDashboardPkThumbnailDigest202ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardPkThumbnailDigest401ApplicationJsonObject?: GetDashboardPkThumbnailDigest401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardPkThumbnailDigest404ApplicationJsonObject?: GetDashboardPkThumbnailDigest404ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardPkThumbnailDigest422ApplicationJsonObject?: GetDashboardPkThumbnailDigest422ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardPkThumbnailDigest500ApplicationJsonObject?: GetDashboardPkThumbnailDigest500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
