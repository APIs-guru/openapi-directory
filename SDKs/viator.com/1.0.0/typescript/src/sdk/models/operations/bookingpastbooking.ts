import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BookingPastbookingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voucherKey" })
  voucherKey?: string;
}


export class BookingPastbookingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayRangeMax" })
  dayRangeMax?: number;

  @SpeakeasyMetadata({ data: "json, name=dayRangeMin" })
  dayRangeMin?: number;

  @SpeakeasyMetadata({ data: "json, name=percentageRefundable" })
  percentageRefundable?: number;

  @SpeakeasyMetadata({ data: "json, name=policyEndTimestamp" })
  policyEndTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=policyStartTimestamp" })
  policyStartTimestamp?: number;
}


export class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountRefundable" })
  amountRefundable?: string;

  @SpeakeasyMetadata({ data: "json, name=cancellationFromTourDate", elemType: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate })
  cancellationFromTourDate?: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}


export class BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageBandId" })
  ageBandId?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=pluralDescription" })
  pluralDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingPastbooking200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcodeOption" })
  barcodeOption?: string;

  @SpeakeasyMetadata({ data: "json, name=barcodeType" })
  barcodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingEngineId" })
  bookingEngineId?: shared.BookingEngineIdResponseEnum;

  @SpeakeasyMetadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItem;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=departsFrom" })
  departsFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=departurePoint" })
  departurePoint?: string;

  @SpeakeasyMetadata({ data: "json, name=departurePointAddress" })
  departurePointAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=departurePointDirections" })
  departurePointDirections?: string;

  @SpeakeasyMetadata({ data: "json, name=destId" })
  destId?: number;

  @SpeakeasyMetadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @SpeakeasyMetadata({ data: "json, name=hoursConfirmed" })
  hoursConfirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @SpeakeasyMetadata({ data: "json, name=languageServicesLanguageCode" })
  languageServicesLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRetailPrice" })
  lastRetailPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=lastRetailPriceFormatted" })
  lastRetailPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=leadTravellerFirstname" })
  leadTravellerFirstname?: string;

  @SpeakeasyMetadata({ data: "json, name=leadTravellerSurname" })
  leadTravellerSurname?: string;

  @SpeakeasyMetadata({ data: "json, name=leadTravellerTitle" })
  leadTravellerTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantCancellable" })
  merchantCancellable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFormatted" })
  merchantNetPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantTermsAndConditions" })
  merchantTermsAndConditions?: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;

  @SpeakeasyMetadata({ data: "json, name=obfsId" })
  obfsId?: string;

  @SpeakeasyMetadata({ data: "json, name=passbooks" })
  passbooks?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=priceUSD" })
  priceUsd?: number;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productPulledDown" })
  productPulledDown?: boolean;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=productWidgetList" })
  productWidgetList?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string;

  @SpeakeasyMetadata({ data: "json, name=savingAmount" })
  savingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=savingAmountFormated" })
  savingAmountFormated?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeDescription" })
  tourGradeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @SpeakeasyMetadata({ data: "json, name=travellerAgeBands", elemType: BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands })
  travellerAgeBands?: BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands[];

  @SpeakeasyMetadata({ data: "json, name=voucherKey" })
  voucherKey?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherOption" })
  voucherOption?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherRequirements" })
  voucherRequirements?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherURL" })
  voucherUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=vouchers" })
  vouchers?: string;
}


// BookingPastbooking200ApplicationJsonData
/** 
 * **object** containing pricing matrix information
**/
export class BookingPastbooking200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookerEmail" })
  bookerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItinerary;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @SpeakeasyMetadata({ data: "json, name=exchangeRate" })
  exchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=hasVoucher" })
  hasVoucher?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingPastbooking200ApplicationJsonDataItemSummaries })
  itemSummaries?: BookingPastbooking200ApplicationJsonDataItemSummaries[];

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @SpeakeasyMetadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPrice" })
  totalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPriceFormatted" })
  totalPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=totalPriceUSD" })
  totalPriceUsd?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherKey" })
  voucherKey?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherURL" })
  voucherUrl?: string;
}


export class BookingPastbooking200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: BookingPastbooking200ApplicationJsonData;

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


export class BookingPastbookingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BookingPastbookingQueryParams;

  @SpeakeasyMetadata()
  headers: BookingPastbookingHeaders;
}


export class BookingPastbookingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingPastbooking200ApplicationJsonObject?: BookingPastbooking200ApplicationJson;
}
