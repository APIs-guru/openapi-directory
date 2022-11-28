import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageSearchQueryParams extends SpeakeasyBase {
    activeStatus?: number;
    categoryId?: number;
    endPrice?: number;
    gymId?: number;
    limit?: number;
    offset?: number;
    orderBy?: string;
    requestSource?: number;
    searchText?: string;
    startpPrice?: number;
    type?: string;
}
export declare class PackageSearchRequest extends SpeakeasyBase {
    queryParams: PackageSearchQueryParams;
}
export declare class PackageSearchResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfListOfPackageSearchDto?: shared.DefaultResponseDtoOfListOfPackageSearchDto;
    defaultResponseDtoOfPackageSearchDtos?: shared.DefaultResponseDtoOfPackageSearchDto[];
    statusCode: number;
}
