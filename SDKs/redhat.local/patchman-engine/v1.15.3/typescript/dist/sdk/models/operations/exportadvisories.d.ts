import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportAdvisoriesQueryParams extends SpeakeasyBase {
    filterAdvisoryType?: string;
    filterApplicableSystems?: string;
    filterDescription?: string;
    filterId?: string;
    filterPublicDate?: string;
    filterSeverity?: string;
    filterSynopsis?: string;
    search?: string;
}
export declare class ExportAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ExportAdvisoriesRequest extends SpeakeasyBase {
    queryParams: ExportAdvisoriesQueryParams;
    security: ExportAdvisoriesSecurity;
}
export declare class ExportAdvisoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    controllersAdvisoryInlineItems?: shared.ControllersAdvisoryInlineItem[];
}
