import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageUpdateStatusQueryParams extends SpeakeasyBase {
    packageId?: number;
    status?: number;
    userName?: string;
}
export declare class PackageUpdateStatusRequest extends SpeakeasyBase {
    queryParams: PackageUpdateStatusQueryParams;
}
export declare class PackageUpdateStatusResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfBoolean?: shared.DefaultResponseDtoOfBoolean;
    defaultResponseDtoOfString?: shared.DefaultResponseDtoOfString;
    statusCode: number;
}
