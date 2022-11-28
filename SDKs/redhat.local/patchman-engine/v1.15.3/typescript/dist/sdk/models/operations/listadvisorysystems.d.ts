import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAdvisorySystemsPathParams extends SpeakeasyBase {
    advisoryId: string;
}
export declare enum ListAdvisorySystemsSortEnum {
    Id = "id",
    DisplayName = "display_name",
    LastEvaluation = "last_evaluation",
    LastUpload = "last_upload",
    RhsaCount = "rhsa_count",
    RhbaCount = "rhba_count",
    RheaCount = "rhea_count",
    OtherCount = "other_count",
    Stale = "stale"
}
export declare class ListAdvisorySystemsQueryParams extends SpeakeasyBase {
    filterCreated?: string;
    filterCulledTimestamp?: string;
    filterDisplayName?: string;
    filterId?: string;
    filterInsightsId?: string;
    filterLastEvaluation?: string;
    filterLastUpload?: string;
    filterOtherCount?: string;
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
    sort?: ListAdvisorySystemsSortEnum;
    tags?: string[];
}
export declare class ListAdvisorySystemsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ListAdvisorySystemsRequest extends SpeakeasyBase {
    pathParams: ListAdvisorySystemsPathParams;
    queryParams: ListAdvisorySystemsQueryParams;
    security: ListAdvisorySystemsSecurity;
}
export declare class ListAdvisorySystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersAdvisorySystemsResponse?: shared.ControllersAdvisorySystemsResponse;
}
