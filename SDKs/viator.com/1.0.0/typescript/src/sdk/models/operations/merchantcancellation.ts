import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MerchantCancellationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class MerchantCancellationRequestBodyCancelItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelCode" })
  cancelCode?: string;

  @SpeakeasyMetadata({ data: "json, name=cancelDescription" })
  cancelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;
}


export class MerchantCancellationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelItems", elemType: MerchantCancellationRequestBodyCancelItems })
  cancelItems?: MerchantCancellationRequestBodyCancelItems[];

  @SpeakeasyMetadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;
}


export class MerchantCancellation200ApplicationJsonDataCancelItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationResponseDescription" })
  cancellationResponseDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=cancellationResponseStatusCode" })
  cancellationResponseStatusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;
}


export class MerchantCancellation200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelItems", elemType: MerchantCancellation200ApplicationJsonDataCancelItems })
  cancelItems?: MerchantCancellation200ApplicationJsonDataCancelItems[];

  @SpeakeasyMetadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;
}


export class MerchantCancellation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: MerchantCancellation200ApplicationJsonData;

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


export class MerchantCancellation400ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationResponseDescription" })
  cancellationResponseDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=cancellationResponseStatusCode" })
  cancellationResponseStatusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;
}


export class MerchantCancellation400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: MerchantCancellation400ApplicationJsonData;

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


export class MerchantCancellationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: MerchantCancellationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MerchantCancellationRequestBody;
}


export class MerchantCancellationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  merchantCancellation200ApplicationJsonObject?: MerchantCancellation200ApplicationJson;

  @SpeakeasyMetadata()
  merchantCancellation400ApplicationJsonObject?: MerchantCancellation400ApplicationJson;
}
