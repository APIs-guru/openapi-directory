import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardPkThumbnailDigestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=digest" })
  digest: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDashboardPkThumbnailDigestQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.ThumbnailQuerySchema;
}


export class GetDashboardPkThumbnailDigestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardPkThumbnailDigestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDashboardPkThumbnailDigestPathParams;

  @Metadata()
  queryParams: GetDashboardPkThumbnailDigestQueryParams;

  @Metadata()
  security: GetDashboardPkThumbnailDigestSecurity;
}


export class GetDashboardPkThumbnailDigest202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigest500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardPkThumbnailDigestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardPkThumbnailDigest200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  getDashboardPkThumbnailDigest202ApplicationJsonObject?: GetDashboardPkThumbnailDigest202ApplicationJson;

  @Metadata()
  getDashboardPkThumbnailDigest401ApplicationJsonObject?: GetDashboardPkThumbnailDigest401ApplicationJson;

  @Metadata()
  getDashboardPkThumbnailDigest404ApplicationJsonObject?: GetDashboardPkThumbnailDigest404ApplicationJson;

  @Metadata()
  getDashboardPkThumbnailDigest422ApplicationJsonObject?: GetDashboardPkThumbnailDigest422ApplicationJson;

  @Metadata()
  getDashboardPkThumbnailDigest500ApplicationJsonObject?: GetDashboardPkThumbnailDigest500ApplicationJson;

  @Metadata()
  statusCode: number;
}
