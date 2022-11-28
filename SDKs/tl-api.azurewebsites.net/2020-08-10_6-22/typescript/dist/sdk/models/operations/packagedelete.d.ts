import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageDeleteQueryParams extends SpeakeasyBase {
    packageId?: number;
}
export declare class PackageDeleteRequest extends SpeakeasyBase {
    queryParams: PackageDeleteQueryParams;
}
export declare class PackageDeleteResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfBoolean?: shared.DefaultResponseDtoOfBoolean;
    defaultResponseDtoOfString?: shared.DefaultResponseDtoOfString;
    statusCode: number;
}
