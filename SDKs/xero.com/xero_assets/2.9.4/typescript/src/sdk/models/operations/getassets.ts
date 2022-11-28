import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAssetsOrderByEnum {
    AssetType = "AssetType",
    AssetName = "AssetName",
    AssetNumber = "AssetNumber",
    PurchaseDate = "PurchaseDate",
    PurchasePrice = "PurchasePrice",
    DisposalDate = "DisposalDate",
    DisposalPrice = "DisposalPrice"
}

export enum GetAssetsSortDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class GetAssetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterBy" })
  filterBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetAssetsOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: GetAssetsSortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status: shared.AssetStatusQueryParamEnum;
}


export class GetAssetsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAssetsQueryParams;

  @SpeakeasyMetadata()
  headers: GetAssetsHeaders;

  @SpeakeasyMetadata()
  security: GetAssetsSecurity;
}


export class GetAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assets?: shared.Assets;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
