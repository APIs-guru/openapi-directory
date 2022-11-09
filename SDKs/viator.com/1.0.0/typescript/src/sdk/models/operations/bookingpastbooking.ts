import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BookingPastbookingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voucherKey" })
  voucherKey?: string;
}


export class BookingPastbookingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingPastbookingRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BookingPastbookingQueryParams;

  @Metadata()
  headers: BookingPastbookingHeaders;
}


export class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayRangeMax" })
  dayRangeMax?: number;

  @Metadata({ data: "json, name=dayRangeMin" })
  dayRangeMin?: number;

  @Metadata({ data: "json, name=percentageRefundable" })
  percentageRefundable?: number;

  @Metadata({ data: "json, name=policyEndTimestamp" })
  policyEndTimestamp?: number;

  @Metadata({ data: "json, name=policyStartTimestamp" })
  policyStartTimestamp?: number;
}


export class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountRefundable" })
  amountRefundable?: string;

  @Metadata({ data: "json, name=cancellationFromTourDate", elemType: operations.BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate })
  cancellationFromTourDate?: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}


export class BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageBandId" })
  ageBandId?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=pluralDescription" })
  pluralDescription?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


export class BookingPastbooking200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcodeOption" })
  barcodeOption?: string;

  @Metadata({ data: "json, name=barcodeType" })
  barcodeType?: string;

  @Metadata({ data: "json, name=bookingEngineId" })
  bookingEngineId?: shared.BookingEngineIdResponseEnum;

  @Metadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItem;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=departsFrom" })
  departsFrom?: string;

  @Metadata({ data: "json, name=departurePoint" })
  departurePoint?: string;

  @Metadata({ data: "json, name=departurePointAddress" })
  departurePointAddress?: string;

  @Metadata({ data: "json, name=departurePointDirections" })
  departurePointDirections?: string;

  @Metadata({ data: "json, name=destId" })
  destId?: number;

  @Metadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;

  @Metadata({ data: "json, name=hoursConfirmed" })
  hoursConfirmed?: number;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @Metadata({ data: "json, name=languageServicesLanguageCode" })
  languageServicesLanguageCode?: string;

  @Metadata({ data: "json, name=lastRetailPrice" })
  lastRetailPrice?: number;

  @Metadata({ data: "json, name=lastRetailPriceFormatted" })
  lastRetailPriceFormatted?: string;

  @Metadata({ data: "json, name=leadTravellerFirstname" })
  leadTravellerFirstname?: string;

  @Metadata({ data: "json, name=leadTravellerSurname" })
  leadTravellerSurname?: string;

  @Metadata({ data: "json, name=leadTravellerTitle" })
  leadTravellerTitle?: string;

  @Metadata({ data: "json, name=merchantCancellable" })
  merchantCancellable?: boolean;

  @Metadata({ data: "json, name=merchantNetPrice" })
  merchantNetPrice?: number;

  @Metadata({ data: "json, name=merchantNetPriceFormatted" })
  merchantNetPriceFormatted?: string;

  @Metadata({ data: "json, name=merchantTermsAndConditions" })
  merchantTermsAndConditions?: BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;

  @Metadata({ data: "json, name=obfsId" })
  obfsId?: string;

  @Metadata({ data: "json, name=passbooks" })
  passbooks?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @Metadata({ data: "json, name=priceUSD" })
  priceUsd?: number;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=productPulledDown" })
  productPulledDown?: boolean;

  @Metadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @Metadata({ data: "json, name=productWidgetList" })
  productWidgetList?: string;

  @Metadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string;

  @Metadata({ data: "json, name=savingAmount" })
  savingAmount?: string;

  @Metadata({ data: "json, name=savingAmountFormated" })
  savingAmountFormated?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;

  @Metadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @Metadata({ data: "json, name=tourGradeDescription" })
  tourGradeDescription?: string;

  @Metadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @Metadata({ data: "json, name=travellerAgeBands", elemType: operations.BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands })
  travellerAgeBands?: BookingPastbooking200ApplicationJsonDataItemSummariesTravellerAgeBands[];

  @Metadata({ data: "json, name=voucherKey" })
  voucherKey?: string;

  @Metadata({ data: "json, name=voucherOption" })
  voucherOption?: string;

  @Metadata({ data: "json, name=voucherRequirements" })
  voucherRequirements?: string;

  @Metadata({ data: "json, name=voucherURL" })
  voucherUrl?: string;

  @Metadata({ data: "json, name=vouchers" })
  vouchers?: string;
}


// BookingPastbooking200ApplicationJsonData
/** 
 * **object** containing pricing matrix information
**/
export class BookingPastbooking200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookerEmail" })
  bookerEmail?: string;

  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: string;

  @Metadata({ data: "json, name=bookingStatus" })
  bookingStatus?: shared.BookingStatusItinerary;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=distributorRef" })
  distributorRef?: string;

  @Metadata({ data: "json, name=exchangeRate" })
  exchangeRate?: number;

  @Metadata({ data: "json, name=hasVoucher" })
  hasVoucher?: boolean;

  @Metadata({ data: "json, name=itemSummaries", elemType: operations.BookingPastbooking200ApplicationJsonDataItemSummaries })
  itemSummaries?: BookingPastbooking200ApplicationJsonDataItemSummaries[];

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @Metadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=totalPrice" })
  totalPrice?: number;

  @Metadata({ data: "json, name=totalPriceFormatted" })
  totalPriceFormatted?: string;

  @Metadata({ data: "json, name=totalPriceUSD" })
  totalPriceUsd?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=voucherKey" })
  voucherKey?: string;

  @Metadata({ data: "json, name=voucherURL" })
  voucherUrl?: string;
}


export class BookingPastbooking200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: BookingPastbooking200ApplicationJsonData;

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


export class BookingPastbookingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingPastbooking200ApplicationJsonObject?: BookingPastbooking200ApplicationJson;
}
