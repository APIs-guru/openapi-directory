import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetAssetsOrderByEnum {
    AssetType = "AssetType",
    AssetName = "AssetName",
    AssetNumber = "AssetNumber",
    PurchaseDate = "PurchaseDate",
    PurchasePrice = "PurchasePrice",
    DisposalDate = "DisposalDate",
    DisposalPrice = "DisposalPrice"
}
export declare enum GetAssetsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetAssetsQueryParams extends SpeakeasyBase {
    filterBy?: string;
    orderBy?: GetAssetsOrderByEnum;
    page?: number;
    pageSize?: number;
    sortDirection?: GetAssetsSortDirectionEnum;
    status: shared.AssetStatusQueryParamEnum;
}
export declare class GetAssetsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetAssetsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAssetsRequest extends SpeakeasyBase {
    queryParams: GetAssetsQueryParams;
    headers: GetAssetsHeaders;
    security: GetAssetsSecurity;
}
export declare class GetAssetsResponse extends SpeakeasyBase {
    assets?: shared.Assets;
    contentType: string;
    statusCode: number;
}
