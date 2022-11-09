import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchFreetextHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}

export enum SearchFreetextRequestBodySearchTypesEnum {
    Product = "PRODUCT"
,    Destination = "DESTINATION"
,    Attraction = "ATTRACTION"
,    Recommendation = "RECOMMENDATION"
}


export class SearchFreetextRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=destId" })
  destId?: number;

  @Metadata({ data: "json, name=searchTypes" })
  searchTypes?: SearchFreetextRequestBodySearchTypesEnum[];

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: shared.SortOrderEnum;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=topX" })
  topX?: string;
}


export class SearchFreetextRequest extends SpeakeasyBase {
  @Metadata()
  headers: SearchFreetextHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SearchFreetextRequestBody;
}


export class SearchFreetext200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.SearchFreetextResponse })
  data?: shared.SearchFreetextResponse[];

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


export class SearchFreetextResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchFreetext200ApplicationJsonObject?: SearchFreetext200ApplicationJson;
}
