import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MerchantCancellationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class MerchantCancellationRequestBodyCancelItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelCode" })
  cancelCode?: string;

  @Metadata({ data: "json, name=cancelDescription" })
  cancelDescription?: string;

  @Metadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: number;
}


export class MerchantCancellationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelItems", elemType: operations.MerchantCancellationRequestBodyCancelItems })
  cancelItems?: MerchantCancellationRequestBodyCancelItems[];

  @Metadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;
}


export class MerchantCancellationRequest extends SpeakeasyBase {
  @Metadata()
  headers: MerchantCancellationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: MerchantCancellationRequestBody;
}


export class MerchantCancellation200ApplicationJsonDataCancelItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationResponseDescription" })
  cancellationResponseDescription?: string;

  @Metadata({ data: "json, name=cancellationResponseStatusCode" })
  cancellationResponseStatusCode?: string;

  @Metadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;
}


export class MerchantCancellation200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelItems", elemType: operations.MerchantCancellation200ApplicationJsonDataCancelItems })
  cancelItems?: MerchantCancellation200ApplicationJsonDataCancelItems[];

  @Metadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;
}


export class MerchantCancellation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: MerchantCancellation200ApplicationJsonData;

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


export class MerchantCancellation400ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationResponseDescription" })
  cancellationResponseDescription?: string;

  @Metadata({ data: "json, name=cancellationResponseStatusCode" })
  cancellationResponseStatusCode?: string;

  @Metadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;
}


export class MerchantCancellation400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: MerchantCancellation400ApplicationJsonData;

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


export class MerchantCancellationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  merchantCancellation200ApplicationJsonObject?: MerchantCancellation200ApplicationJson;

  @Metadata()
  merchantCancellation400ApplicationJsonObject?: MerchantCancellation400ApplicationJson;
}
