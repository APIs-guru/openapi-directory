import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PackageVersionsPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class PackageVersionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class PackageVersionsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class PackageVersionsRequest extends SpeakeasyBase {
    pathParams: PackageVersionsPathParams;
    queryParams: PackageVersionsQueryParams;
    security: PackageVersionsSecurity;
}
export declare class PackageVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersPackageVersionsResponse?: shared.ControllersPackageVersionsResponse;
}
