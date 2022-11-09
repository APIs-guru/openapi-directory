import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ExportPackagesSortEnum {
    Id = "id",
    Name = "name",
    SystemsInstalled = "systems_installed",
    SystemsUpdatable = "systems_updatable"
}
export declare class ExportPackagesQueryParams extends SpeakeasyBase {
    filterName?: string;
    filterSummary?: string;
    filterSystemsInstalled?: string;
    filterSystemsUpdatable?: string;
    search?: string;
    sort?: ExportPackagesSortEnum;
}
export declare class ExportPackagesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ExportPackagesRequest extends SpeakeasyBase {
    queryParams: ExportPackagesQueryParams;
    security: ExportPackagesSecurity;
}
export declare class ExportPackagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    controllersPackageItems?: shared.ControllersPackageItem[];
}
