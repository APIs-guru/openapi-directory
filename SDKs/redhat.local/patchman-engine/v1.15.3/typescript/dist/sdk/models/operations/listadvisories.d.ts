import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAdvisoriesSortEnum {
    Id = "id",
    Name = "name",
    AdvisoryType = "advisory_type",
    Synopsis = "synopsis",
    PublicDate = "public_date",
    ApplicableSystems = "applicable_systems"
}
export declare class ListAdvisoriesQueryParams extends SpeakeasyBase {
    filterAdvisoryType?: string;
    filterApplicableSystems?: string;
    filterDescription?: string;
    filterId?: string;
    filterPublicDate?: string;
    filterSeverity?: string;
    filterSynopsis?: string;
    filterSystemProfileSapSidsIn?: string[];
    filterSystemProfileSapSystem?: string;
    limit?: number;
    offset?: number;
    search?: string;
    sort?: ListAdvisoriesSortEnum;
    tags?: string[];
}
export declare class ListAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ListAdvisoriesRequest extends SpeakeasyBase {
    queryParams: ListAdvisoriesQueryParams;
    security: ListAdvisoriesSecurity;
}
export declare class ListAdvisoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersAdvisoriesResponse?: shared.ControllersAdvisoriesResponse;
}
