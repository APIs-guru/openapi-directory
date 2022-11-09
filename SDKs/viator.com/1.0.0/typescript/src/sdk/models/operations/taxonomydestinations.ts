import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TaxonomyDestinationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class TaxonomyDestinationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: TaxonomyDestinationsHeaders;
}


export class TaxonomyDestinations200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultCurrencyCode" })
  defaultCurrencyCode?: string;

  @Metadata({ data: "json, name=destinationId" })
  destinationId?: number;

  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=destinationType" })
  destinationType?: shared.DestinationTypeEnum;

  @Metadata({ data: "json, name=destinationUrlName" })
  destinationUrlName?: string;

  @Metadata({ data: "json, name=iataCode" })
  iataCode?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=lookupId" })
  lookupId?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: number;

  @Metadata({ data: "json, name=selectable" })
  selectable?: boolean;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


export class TaxonomyDestinations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.TaxonomyDestinations200ApplicationJsonData })
  data?: TaxonomyDestinations200ApplicationJsonData[];

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


export class TaxonomyDestinationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxonomyDestinations200ApplicationJsonObject?: TaxonomyDestinations200ApplicationJson;
}
