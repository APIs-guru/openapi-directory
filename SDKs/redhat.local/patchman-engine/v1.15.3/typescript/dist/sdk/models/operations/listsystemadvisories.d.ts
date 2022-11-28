import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSystemAdvisoriesPathParams extends SpeakeasyBase {
    inventoryId: string;
}
export declare enum ListSystemAdvisoriesSortEnum {
    Id = "id",
    Name = "name",
    Type = "type",
    Synopsis = "synopsis",
    PublicDate = "public_date"
}
export declare class ListSystemAdvisoriesQueryParams extends SpeakeasyBase {
    filterAdvisoryType?: string;
    filterDescription?: string;
    filterId?: string;
    filterPublicDate?: string;
    filterSeverity?: string;
    filterSynopsis?: string;
    limit?: number;
    offset?: number;
    search?: string;
    sort?: ListSystemAdvisoriesSortEnum;
}
export declare class ListSystemAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ListSystemAdvisoriesRequest extends SpeakeasyBase {
    pathParams: ListSystemAdvisoriesPathParams;
    queryParams: ListSystemAdvisoriesQueryParams;
    security: ListSystemAdvisoriesSecurity;
}
export declare class ListSystemAdvisoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersSystemAdvisoriesResponse?: shared.ControllersSystemAdvisoriesResponse;
}
