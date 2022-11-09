import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SystemPackagesPathParams extends SpeakeasyBase {
    inventoryId: string;
}
export declare class SystemPackagesQueryParams extends SpeakeasyBase {
    filterDescription?: string;
    filterEvra?: string;
    filterName?: string;
    filterSummary?: string;
    filterUpdatable?: boolean;
    limit?: number;
    offset?: number;
    search?: string;
}
export declare class SystemPackagesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class SystemPackagesRequest extends SpeakeasyBase {
    pathParams: SystemPackagesPathParams;
    queryParams: SystemPackagesQueryParams;
    security: SystemPackagesSecurity;
}
export declare class SystemPackagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersSystemPackageResponse?: shared.ControllersSystemPackageResponse;
}
