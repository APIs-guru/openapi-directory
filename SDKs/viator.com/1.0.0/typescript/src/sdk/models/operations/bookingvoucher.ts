import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingVoucherQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embeddedResources" })
  embeddedResources?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fullHTML" })
  fullHtml?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=leadLastName" })
  leadLastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mobileVoucher" })
  mobileVoucher?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voucherKey" })
  voucherKey?: string;
}


export class BookingVoucherHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingVoucherRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BookingVoucherQueryParams;

  @Metadata()
  headers: BookingVoucherHeaders;
}


export class BookingVoucher200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

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


export class BookingVoucherResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingVoucher200ApplicationJsonObject?: BookingVoucher200ApplicationJson;
}
