import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAssetsOrderByEnum {
    AssetType = "AssetType"
,    AssetName = "AssetName"
,    AssetNumber = "AssetNumber"
,    PurchaseDate = "PurchaseDate"
,    PurchasePrice = "PurchasePrice"
,    DisposalDate = "DisposalDate"
,    DisposalPrice = "DisposalPrice"
}

export enum GetAssetsSortDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}


export class GetAssetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filterBy" })
  filterBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: GetAssetsOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortDirection" })
  sortDirection?: GetAssetsSortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status: shared.AssetStatusQueryParamEnum;
}


export class GetAssetsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=xero-tenant-id" })
  xeroTenantId: string;
}


export class GetAssetsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAssetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssetsQueryParams;

  @Metadata()
  headers: GetAssetsHeaders;

  @Metadata()
  security: GetAssetsSecurity;
}


export class GetAssetsResponse extends SpeakeasyBase {
  @Metadata()
  assets?: shared.Assets;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
