import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportPackageSystemsPathParams extends SpeakeasyBase {
    packageName: string;
}
export declare class ExportPackageSystemsQueryParams extends SpeakeasyBase {
    filterSystemProfileSapSidsIn?: string[];
    filterSystemProfileSapSystem?: string;
    tags?: string[];
}
export declare class ExportPackageSystemsSecurity extends SpeakeasyBase {
    rhIdentity: shared.SchemeRhIdentity;
}
export declare class ExportPackageSystemsRequest extends SpeakeasyBase {
    pathParams: ExportPackageSystemsPathParams;
    queryParams: ExportPackageSystemsQueryParams;
    security: ExportPackageSystemsSecurity;
}
export declare class ExportPackageSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    controllersPackageSystemItems?: shared.ControllersPackageSystemItem[];
}
