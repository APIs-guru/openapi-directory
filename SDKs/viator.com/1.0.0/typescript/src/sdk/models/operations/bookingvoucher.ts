import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingVoucherQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embeddedResources" })
  embeddedResources?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullHTML" })
  fullHtml?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=leadLastName" })
  leadLastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mobileVoucher" })
  mobileVoucher?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voucherKey" })
  voucherKey?: string;
}


export class BookingVoucherHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingVoucher200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

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


export class BookingVoucherRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BookingVoucherQueryParams;

  @SpeakeasyMetadata()
  headers: BookingVoucherHeaders;
}


export class BookingVoucherResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingVoucher200ApplicationJsonObject?: BookingVoucher200ApplicationJson;
}
