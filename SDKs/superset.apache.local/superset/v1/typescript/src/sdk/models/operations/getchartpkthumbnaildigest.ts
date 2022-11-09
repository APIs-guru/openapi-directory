import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartPkThumbnailDigestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=digest" })
  digest: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkThumbnailDigestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkThumbnailDigestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartPkThumbnailDigestPathParams;

  @Metadata()
  security: GetChartPkThumbnailDigestSecurity;
}


export class GetChartPkThumbnailDigest400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigest401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigest404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigest500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChartPkThumbnailDigest200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  getChartPkThumbnailDigest400ApplicationJsonObject?: GetChartPkThumbnailDigest400ApplicationJson;

  @Metadata()
  getChartPkThumbnailDigest401ApplicationJsonObject?: GetChartPkThumbnailDigest401ApplicationJson;

  @Metadata()
  getChartPkThumbnailDigest404ApplicationJsonObject?: GetChartPkThumbnailDigest404ApplicationJson;

  @Metadata()
  getChartPkThumbnailDigest500ApplicationJsonObject?: GetChartPkThumbnailDigest500ApplicationJson;

  @Metadata()
  statusCode: number;
}
