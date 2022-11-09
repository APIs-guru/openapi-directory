import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportAdvisorySystemsPathParams extends SpeakeasyBase {
    advisoryId: string;
}
export declare class ExportAdvisorySystemsQueryParams extends SpeakeasyBase {
    filterDisplayName?: string;
    filterId?: string;
    filterLastEvaluation?: string;
    filterLastUpload?: string;
    filterOtherCount?: string;
    filterPackagesInstalled?: string;
    filterPackagesUpdatable?: string;
    filterRhbaCount?: string;
    filterRheaCount?: string;
    filterRhsaCount?: string;
    filterStale?: string;
    filterSystemProfileSapSidsIn?: string[];
    filterSystemProfileSapSystem?: string;
    search?: string;
    tags?: string[];
}
export declare class ExportAdvisorySystemsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ExportAdvisorySystemsRequest extends SpeakeasyBase {
    pathParams: ExportAdvisorySystemsPathParams;
    queryParams: ExportAdvisorySystemsQueryParams;
    security: ExportAdvisorySystemsSecurity;
}
export declare class ExportAdvisorySystemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    controllersSystemInlineItems?: shared.ControllersSystemInlineItem[];
}
