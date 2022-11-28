import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartPkScreenshotDigestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=digest" })
  digest: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkScreenshotDigestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkScreenshotDigest400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigest401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigest404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigest500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChartPkScreenshotDigestPathParams;

  @SpeakeasyMetadata()
  security: GetChartPkScreenshotDigestSecurity;
}


export class GetChartPkScreenshotDigestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartPkScreenshotDigest200ImageWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getChartPkScreenshotDigest400ApplicationJsonObject?: GetChartPkScreenshotDigest400ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkScreenshotDigest401ApplicationJsonObject?: GetChartPkScreenshotDigest401ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkScreenshotDigest404ApplicationJsonObject?: GetChartPkScreenshotDigest404ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkScreenshotDigest500ApplicationJsonObject?: GetChartPkScreenshotDigest500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
