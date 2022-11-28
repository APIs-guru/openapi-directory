import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchFreetextHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}

export enum SearchFreetextRequestBodySearchTypesEnum {
    Product = "PRODUCT",
    Destination = "DESTINATION",
    Attraction = "ATTRACTION",
    Recommendation = "RECOMMENDATION"
}


export class SearchFreetextRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=destId" })
  destId?: number;

  @SpeakeasyMetadata({ data: "json, name=searchTypes" })
  searchTypes?: SearchFreetextRequestBodySearchTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: shared.SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=topX" })
  topX?: string;
}


export class SearchFreetext200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SearchFreetextResponse })
  data?: shared.SearchFreetextResponse[];

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


export class SearchFreetextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchFreetextHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SearchFreetextRequestBody;
}


export class SearchFreetextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchFreetext200ApplicationJsonObject?: SearchFreetext200ApplicationJson;
}
