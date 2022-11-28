import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageGetQueryParams extends SpeakeasyBase {
    packageId?: number;
}
export declare class PackageGetRequest extends SpeakeasyBase {
    queryParams: PackageGetQueryParams;
}
export declare class PackageGetResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfPackageDto?: shared.DefaultResponseDtoOfPackageDto;
    statusCode: number;
}
