import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaxonomyCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destId" })
  destId?: number;
}


export class TaxonomyCategoriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class TaxonomyCategories200ApplicationJsonDataSubcategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=sortorder" })
  sortorder?: number;

  @SpeakeasyMetadata({ data: "json, name=subCategoryUrlName" })
  subCategoryUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=subcategoryId" })
  subcategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=subcategoryName" })
  subcategoryName?: string;
}


export class TaxonomyCategories200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupName" })
  groupName?: string;

  @SpeakeasyMetadata({ data: "json, name=groupUrlName" })
  groupUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=productCount" })
  productCount?: number;

  @SpeakeasyMetadata({ data: "json, name=subcategories", elemType: TaxonomyCategories200ApplicationJsonDataSubcategories })
  subcategories?: TaxonomyCategories200ApplicationJsonDataSubcategories[];

  @SpeakeasyMetadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;
}


export class TaxonomyCategories200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TaxonomyCategories200ApplicationJsonData })
  data?: TaxonomyCategories200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=dateStamp" })
  dateStamp?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCodes" })
  errorCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: any[];

  @SpeakeasyMetadata({ data: "json, name=errorMessageText" })
  errorMessageText?: string;

  @SpeakeasyMetadata({ data: "json, name=errorName" })
  errorName?: string;

  @SpeakeasyMetadata({ data: "json, name=errorReference" })
  errorReference?: string;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: string;

  @SpeakeasyMetadata({ data: "json, name=extraInfo" })
  extraInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=extraObject" })
  extraObject?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vmid" })
  vmid?: string;
}


export class TaxonomyCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TaxonomyCategoriesQueryParams;

  @SpeakeasyMetadata()
  headers: TaxonomyCategoriesHeaders;
}


export class TaxonomyCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taxonomyCategories200ApplicationJsonObject?: TaxonomyCategories200ApplicationJson;
}
