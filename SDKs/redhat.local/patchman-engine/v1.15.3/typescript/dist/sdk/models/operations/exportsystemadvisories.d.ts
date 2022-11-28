import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSystemAdvisoriesPathParams extends SpeakeasyBase {
    inventoryId: string;
}
export declare class ExportSystemAdvisoriesQueryParams extends SpeakeasyBase {
    filterAdvisoryType?: string;
    filterDescription?: string;
    filterId?: string;
    filterPublicDate?: string;
    filterSeverity?: string;
    filterSynopsis?: string;
    search?: string;
}
export declare class ExportSystemAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ExportSystemAdvisoriesRequest extends SpeakeasyBase {
    pathParams: ExportSystemAdvisoriesPathParams;
    queryParams: ExportSystemAdvisoriesQueryParams;
    security: ExportSystemAdvisoriesSecurity;
}
export declare class ExportSystemAdvisoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    controllersSystemAdvisoriesDbLookups?: shared.ControllersSystemAdvisoriesDbLookup[];
}
