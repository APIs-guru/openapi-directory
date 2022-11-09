import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaxonomyCategoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destId" })
  destId?: number;
}


export class TaxonomyCategoriesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class TaxonomyCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TaxonomyCategoriesQueryParams;

  @Metadata()
  headers: TaxonomyCategoriesHeaders;
}


export class TaxonomyCategories200ApplicationJsonDataSubcategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: number;

  @Metadata({ data: "json, name=sortorder" })
  sortorder?: number;

  @Metadata({ data: "json, name=subCategoryUrlName" })
  subCategoryUrlName?: string;

  @Metadata({ data: "json, name=subcategoryId" })
  subcategoryId?: number;

  @Metadata({ data: "json, name=subcategoryName" })
  subcategoryName?: string;
}


export class TaxonomyCategories200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupName" })
  groupName?: string;

  @Metadata({ data: "json, name=groupUrlName" })
  groupUrlName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=productCount" })
  productCount?: number;

  @Metadata({ data: "json, name=subcategories", elemType: operations.TaxonomyCategories200ApplicationJsonDataSubcategories })
  subcategories?: TaxonomyCategories200ApplicationJsonDataSubcategories[];

  @Metadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;
}


export class TaxonomyCategories200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.TaxonomyCategories200ApplicationJsonData })
  data?: TaxonomyCategories200ApplicationJsonData[];

  @Metadata({ data: "json, name=dateStamp" })
  dateStamp?: string;

  @Metadata({ data: "json, name=errorCodes" })
  errorCodes?: string[];

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: any[];

  @Metadata({ data: "json, name=errorMessageText" })
  errorMessageText?: string;

  @Metadata({ data: "json, name=errorName" })
  errorName?: string;

  @Metadata({ data: "json, name=errorReference" })
  errorReference?: string;

  @Metadata({ data: "json, name=errorType" })
  errorType?: string;

  @Metadata({ data: "json, name=extraInfo" })
  extraInfo?: Map<string, any>;

  @Metadata({ data: "json, name=extraObject" })
  extraObject?: Map<string, any>;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=vmid" })
  vmid?: string;
}


export class TaxonomyCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxonomyCategories200ApplicationJsonObject?: TaxonomyCategories200ApplicationJson;
}
