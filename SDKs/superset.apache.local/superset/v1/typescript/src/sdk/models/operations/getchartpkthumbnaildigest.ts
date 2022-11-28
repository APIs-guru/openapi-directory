import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartPkThumbnailDigestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digest" })
  digest: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkThumbnailDigestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkThumbnailDigest400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigest401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigest404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigest500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkThumbnailDigestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChartPkThumbnailDigestPathParams;

  @SpeakeasyMetadata()
  security: GetChartPkThumbnailDigestSecurity;
}


export class GetChartPkThumbnailDigestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartPkThumbnailDigest200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getChartPkThumbnailDigest400ApplicationJsonObject?: GetChartPkThumbnailDigest400ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkThumbnailDigest401ApplicationJsonObject?: GetChartPkThumbnailDigest401ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkThumbnailDigest404ApplicationJsonObject?: GetChartPkThumbnailDigest404ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkThumbnailDigest500ApplicationJsonObject?: GetChartPkThumbnailDigest500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
