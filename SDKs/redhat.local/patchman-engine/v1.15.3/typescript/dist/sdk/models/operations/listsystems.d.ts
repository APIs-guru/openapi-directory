import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListSystemsSortEnum {
    Id = "id",
    DisplayName = "display_name",
    LastEvaluation = "last_evaluation",
    LastUpload = "last_upload",
    RhsaCount = "rhsa_count",
    RhbaCount = "rhba_count",
    RheaCount = "rhea_count",
    OtherCount = "other_count",
    Stale = "stale",
    PackagesInstalled = "packages_installed",
    PackagesUpdatable = "packages_updatable"
}
export declare class ListSystemsQueryParams extends SpeakeasyBase {
    filterCreated?: string;
    filterCulledTimestamp?: string;
    filterDisplayName?: string;
    filterId?: string;
    filterInsightsId?: string;
    filterLastEvaluation?: string;
    filterLastUpload?: string;
    filterOtherCount?: string;
    filterPackagesInstalled?: string;
    filterPackagesUpdatable?: string;
    filterRhbaCount?: string;
    filterRheaCount?: string;
    filterRhsaCount?: string;
    filterStale?: string;
    filterStaleTimestamp?: string;
    filterStaleWarningTimestamp?: string;
    filterSystemProfileSapSidsIn?: string[];
    filterSystemProfileSapSystem?: string;
    limit?: number;
    offset?: number;
    search?: string;
    sort?: ListSystemsSortEnum;
    tags?: string[];
}
export declare class ListSystemsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ListSystemsRequest extends SpeakeasyBase {
    queryParams: ListSystemsQueryParams;
    security: ListSystemsSecurity;
}
export declare class ListSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersSystemsResponse?: shared.ControllersSystemsResponse;
}
