import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSystemsQueryParams extends SpeakeasyBase {
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
export declare class ExportSystemsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ExportSystemsRequest extends SpeakeasyBase {
    queryParams: ExportSystemsQueryParams;
    security: ExportSystemsSecurity;
}
export declare class ExportSystemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    controllersSystemInlineItems?: shared.ControllersSystemInlineItem[];
}
