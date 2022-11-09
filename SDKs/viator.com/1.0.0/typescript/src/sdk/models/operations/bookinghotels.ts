import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingHotelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destId" })
  destId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=productCode" })
  productCode?: string;
}


export class BookingHotelsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingHotelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BookingHotelsQueryParams;

  @Metadata()
  headers: BookingHotelsHeaders;
}


export class BookingHotels200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=destinationId" })
  destinationId?: number;

  @Metadata({ data: "json, name=hotelString" })
  hotelString?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=productCodes" })
  productCodes?: string[];

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingHotels200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.BookingHotels200ApplicationJsonData })
  data?: BookingHotels200ApplicationJsonData[];

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


export class BookingHotelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingHotels200ApplicationJsonObject?: BookingHotels200ApplicationJson;
}
