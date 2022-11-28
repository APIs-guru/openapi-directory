import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartPkScreenshotDigestPathParams extends SpeakeasyBase {
    digest: string;
    pk: number;
}
export declare class GetChartPkScreenshotDigestSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartPkScreenshotDigest400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkScreenshotDigest401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkScreenshotDigest404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkScreenshotDigest500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkScreenshotDigestRequest extends SpeakeasyBase {
    pathParams: GetChartPkScreenshotDigestPathParams;
    security: GetChartPkScreenshotDigestSecurity;
}
export declare class GetChartPkScreenshotDigestResponse extends SpeakeasyBase {
    contentType: string;
    getChartPkScreenshotDigest200ImageWildcardBinaryString?: Uint8Array;
    getChartPkScreenshotDigest400ApplicationJsonObject?: GetChartPkScreenshotDigest400ApplicationJson;
    getChartPkScreenshotDigest401ApplicationJsonObject?: GetChartPkScreenshotDigest401ApplicationJson;
    getChartPkScreenshotDigest404ApplicationJsonObject?: GetChartPkScreenshotDigest404ApplicationJson;
    getChartPkScreenshotDigest500ApplicationJsonObject?: GetChartPkScreenshotDigest500ApplicationJson;
    statusCode: number;
}
