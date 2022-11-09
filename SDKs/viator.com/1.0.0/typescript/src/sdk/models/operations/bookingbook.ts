import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BookingBookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


// BookingBookRequestBodyBooker
/** 
 * **object** containing details about the primary contact (**note**: this contact needn't be a traveller)
**/
export class BookingBookRequestBodyBooker extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellPhone" })
  cellPhone?: string;

  @Metadata({ data: "json, name=cellPhoneCountryCode" })
  cellPhoneCountryCode?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstname" })
  firstname: string;

  @Metadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @Metadata({ data: "json, name=surname" })
  surname: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class BookingBookRequestBodyItemsBookingQuestionAnswers extends SpeakeasyBase {
  @Metadata({ data: "json, name=answer" })
  answer?: string;

  @Metadata({ data: "json, name=questionId" })
  questionId?: number;
}


// BookingBookRequestBodyItemsPartnerItemDetail
/** 
 * **object** containing partner details at a per-item level
**/
export class BookingBookRequestBodyItemsPartnerItemDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;
}


export class BookingBookRequestBodyItemsTravellers extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandId" })
  bandId?: number;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=leadTraveller" })
  leadTraveller?: boolean;

  @Metadata({ data: "json, name=surname" })
  surname?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class BookingBookRequestBodyItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingQuestionAnswers", elemType: operations.BookingBookRequestBodyItemsBookingQuestionAnswers })
  bookingQuestionAnswers?: BookingBookRequestBodyItemsBookingQuestionAnswers[];

  @Metadata({ data: "json, name=hotelId" })
  hotelId?: string;

  @Metadata({ data: "json, name=languageOptionCode" })
  languageOptionCode?: string;

  @Metadata({ data: "json, name=partnerItemDetail" })
  partnerItemDetail?: BookingBookRequestBodyItemsPartnerItemDetail;

  @Metadata({ data: "json, name=pickupPoint" })
  pickupPoint?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=specialRequirements" })
  specialRequirements?: string;

  @Metadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @Metadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @Metadata({ data: "json, name=travellers", elemType: operations.BookingBookRequestBodyItemsTravellers })
  travellers?: BookingBookRequestBodyItemsTravellers[];
}


// BookingBookRequestBodyPartnerDetail
/** 
 * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
 * 
**/
export class BookingBookRequestBodyPartnerDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributorRef" })
  distributorRef?: string;
}


export class BookingBookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=booker" })
  booker?: BookingBookRequestBodyBooker;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=demo" })
  demo?: boolean;

  @Metadata({ data: "json, name=items", elemType: operations.BookingBookRequestBodyItems })
  items?: BookingBookRequestBodyItems[];

  @Metadata({ data: "json, name=partnerDetail" })
  partnerDetail?: BookingBookRequestBodyPartnerDetail;
}


export class BookingBookRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingBookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingBookRequestBody;
}


export class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
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


export class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountRefundable" })
  amountRefundable?: string;

  @Metadata({ data: "json, name=cancellationFromTourDate", elemType: operations.BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate })
  cancellationFromTourDate?: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}


export class BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
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


export class BookingBook200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
  @Metadata({ data: "json, name=applePassSupported" })
  applePassSupported?: boolean;

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
  hoursConfirmed?: string;

  @Metadata({ data: "json, name=itemId" })
  itemId?: number;

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @Metadata({ data: "json, name=languageServicesCode" })
  languageServicesCode?: string;

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
  merchantTermsAndConditions?: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;

  @Metadata({ data: "json, name=obfsId" })
  obfsId?: number;

  @Metadata({ data: "json, name=passbooks" })
  passbooks?: string;

  @Metadata({ data: "json, name=pickupHotelId" })
  pickupHotelId?: string;

  @Metadata({ data: "json, name=pickupHotelName" })
  pickupHotelName?: string;

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

  @Metadata({ data: "json, name=startingTime" })
  startingTime?: string;

  @Metadata({ data: "json, name=supplierName" })
  supplierName?: string;

  @Metadata({ data: "json, name=supplierPhoneNumber" })
  supplierPhoneNumber?: string;

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: Map<string, any>;

  @Metadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @Metadata({ data: "json, name=tourGradeDescription" })
  tourGradeDescription?: string;

  @Metadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @Metadata({ data: "json, name=travellerAgeBands", elemType: operations.BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands })
  travellerAgeBands?: BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands[];

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


export class BookingBook200ApplicationJsonData extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=itemSummaries", elemType: operations.BookingBook200ApplicationJsonDataItemSummaries })
  itemSummaries?: BookingBook200ApplicationJsonDataItemSummaries[];

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @Metadata({ data: "json, name=omniPreRuleList" })
  omniPreRuleList?: string;

  @Metadata({ data: "json, name=paypalRedirectURL" })
  paypalRedirectUrl?: string;

  @Metadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string;

  @Metadata({ data: "json, name=securityToken" })
  securityToken?: string;

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


export class BookingBook200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: BookingBook200ApplicationJsonData;

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


export class BookingBookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingBook200ApplicationJsonObject?: BookingBook200ApplicationJson;
}
