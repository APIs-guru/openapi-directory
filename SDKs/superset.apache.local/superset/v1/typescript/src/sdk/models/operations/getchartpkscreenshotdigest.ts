import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartPkScreenshotDigestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=digest" })
  digest: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkScreenshotDigestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkScreenshotDigestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartPkScreenshotDigestPathParams;

  @Metadata()
  security: GetChartPkScreenshotDigestSecurity;
}


export class GetChartPkScreenshotDigest400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigest401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigest404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigest500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkScreenshotDigestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChartPkScreenshotDigest200ImageWildcardBinaryString?: Uint8Array;

  @Metadata()
  getChartPkScreenshotDigest400ApplicationJsonObject?: GetChartPkScreenshotDigest400ApplicationJson;

  @Metadata()
  getChartPkScreenshotDigest401ApplicationJsonObject?: GetChartPkScreenshotDigest401ApplicationJson;

  @Metadata()
  getChartPkScreenshotDigest404ApplicationJsonObject?: GetChartPkScreenshotDigest404ApplicationJson;

  @Metadata()
  getChartPkScreenshotDigest500ApplicationJsonObject?: GetChartPkScreenshotDigest500ApplicationJson;

  @Metadata()
  statusCode: number;
}
