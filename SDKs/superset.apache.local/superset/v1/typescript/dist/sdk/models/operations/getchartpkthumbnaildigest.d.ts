import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartPkThumbnailDigestPathParams extends SpeakeasyBase {
    digest: string;
    pk: number;
}
export declare class GetChartPkThumbnailDigestSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartPkThumbnailDigest400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkThumbnailDigest401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkThumbnailDigest404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkThumbnailDigest500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkThumbnailDigestRequest extends SpeakeasyBase {
    pathParams: GetChartPkThumbnailDigestPathParams;
    security: GetChartPkThumbnailDigestSecurity;
}
export declare class GetChartPkThumbnailDigestResponse extends SpeakeasyBase {
    contentType: string;
    getChartPkThumbnailDigest200ImageWildcardBinaryString?: Uint8Array;
    getChartPkThumbnailDigest400ApplicationJsonObject?: GetChartPkThumbnailDigest400ApplicationJson;
    getChartPkThumbnailDigest401ApplicationJsonObject?: GetChartPkThumbnailDigest401ApplicationJson;
    getChartPkThumbnailDigest404ApplicationJsonObject?: GetChartPkThumbnailDigest404ApplicationJson;
    getChartPkThumbnailDigest500ApplicationJsonObject?: GetChartPkThumbnailDigest500ApplicationJson;
    statusCode: number;
}
