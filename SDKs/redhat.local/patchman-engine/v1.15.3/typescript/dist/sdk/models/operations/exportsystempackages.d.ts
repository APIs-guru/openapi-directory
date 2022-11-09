import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportSystemPackagesPathParams extends SpeakeasyBase {
    inventoryId: string;
}
export declare class ExportSystemPackagesQueryParams extends SpeakeasyBase {
    filterDescription?: string;
    filterEvra?: string;
    filterName?: string;
    filterSummary?: string;
    filterUpdatable?: boolean;
    search?: string;
}
export declare class ExportSystemPackagesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ExportSystemPackagesRequest extends SpeakeasyBase {
    pathParams: ExportSystemPackagesPathParams;
    queryParams: ExportSystemPackagesQueryParams;
    security: ExportSystemPackagesSecurity;
}
export declare class ExportSystemPackagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersSystemPackageInlines?: shared.ControllersSystemPackageInline[];
}
