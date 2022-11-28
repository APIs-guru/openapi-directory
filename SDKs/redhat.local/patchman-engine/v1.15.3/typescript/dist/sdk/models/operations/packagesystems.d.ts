import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageSystemsPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class PackageSystemsQueryParams extends SpeakeasyBase {
    filterSystemProfileSapSidsIn?: string[];
    filterSystemProfileSapSystem?: string;
    limit?: number;
    offset?: number;
    tags?: string[];
}
export declare class PackageSystemsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class PackageSystemsRequest extends SpeakeasyBase {
    pathParams: PackageSystemsPathParams;
    queryParams: PackageSystemsQueryParams;
    security: PackageSystemsSecurity;
}
export declare class PackageSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersPackageSystemsResponse?: shared.ControllersPackageSystemsResponse;
}
