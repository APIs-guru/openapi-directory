import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListPackagesSortEnum {
    Id = "id",
    Name = "name",
    SystemsInstalled = "systems_installed",
    SystemsUpdatable = "systems_updatable"
}
export declare class ListPackagesQueryParams extends SpeakeasyBase {
    filterName?: string;
    filterSummary?: string;
    filterSystemProfileSapSidsIn?: string[];
    filterSystemProfileSapSystem?: string;
    filterSystemsInstalled?: string;
    filterSystemsUpdatable?: string;
    limit?: number;
    offset?: number;
    search?: string;
    sort?: ListPackagesSortEnum;
    tags?: string[];
}
export declare class ListPackagesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ListPackagesRequest extends SpeakeasyBase {
    queryParams: ListPackagesQueryParams;
    security: ListPackagesSecurity;
}
export declare class ListPackagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersPackagesResponse?: shared.ControllersPackagesResponse;
}
