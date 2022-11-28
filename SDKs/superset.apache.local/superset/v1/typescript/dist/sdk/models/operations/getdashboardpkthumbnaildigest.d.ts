import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardPkThumbnailDigestPathParams extends SpeakeasyBase {
    digest: string;
    pk: number;
}
export declare class GetDashboardPkThumbnailDigestQueryParams extends SpeakeasyBase {
    q?: shared.ThumbnailQuerySchema;
}
export declare class GetDashboardPkThumbnailDigestSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardPkThumbnailDigest202ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardPkThumbnailDigest401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardPkThumbnailDigest404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardPkThumbnailDigest422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardPkThumbnailDigest500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardPkThumbnailDigestRequest extends SpeakeasyBase {
    pathParams: GetDashboardPkThumbnailDigestPathParams;
    queryParams: GetDashboardPkThumbnailDigestQueryParams;
    security: GetDashboardPkThumbnailDigestSecurity;
}
export declare class GetDashboardPkThumbnailDigestResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardPkThumbnailDigest200ImageWildcardBinaryString?: Uint8Array;
    getDashboardPkThumbnailDigest202ApplicationJsonObject?: GetDashboardPkThumbnailDigest202ApplicationJson;
    getDashboardPkThumbnailDigest401ApplicationJsonObject?: GetDashboardPkThumbnailDigest401ApplicationJson;
    getDashboardPkThumbnailDigest404ApplicationJsonObject?: GetDashboardPkThumbnailDigest404ApplicationJson;
    getDashboardPkThumbnailDigest422ApplicationJsonObject?: GetDashboardPkThumbnailDigest422ApplicationJson;
    getDashboardPkThumbnailDigest500ApplicationJsonObject?: GetDashboardPkThumbnailDigest500ApplicationJson;
    statusCode: number;
}
