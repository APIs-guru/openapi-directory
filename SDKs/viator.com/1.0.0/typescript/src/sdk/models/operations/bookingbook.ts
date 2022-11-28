import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BookingBookHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


// BookingBookRequestBodyBooker
/** 
 * **object** containing details about the primary contact (**note**: this contact needn't be a traveller)
**/
export class BookingBookRequestBodyBooker extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellPhone" })
  cellPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=cellPhoneCountryCode" })
  cellPhoneCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname: string;

  @SpeakeasyMetadata({ data: "json, name=homePhone" })
  homePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=surname" })
  surname: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class BookingBookRequestBodyItemsBookingQuestionAnswers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=questionId" })
  questionId?: number;
}


// BookingBookRequestBodyItemsPartnerItemDetail
/** 
 * **object** containing partner details at a per-item level
**/
export class BookingBookRequestBodyItemsPartnerItemDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributorItemRef" })
  distributorItemRef?: string;
}


export class BookingBookRequestBodyItemsTravellers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=leadTraveller" })
  leadTraveller?: boolean;

  @SpeakeasyMetadata({ data: "json, name=surname" })
  surname?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class BookingBookRequestBodyItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingQuestionAnswers", elemType: BookingBookRequestBodyItemsBookingQuestionAnswers })
  bookingQuestionAnswers?: BookingBookRequestBodyItemsBookingQuestionAnswers[];

  @SpeakeasyMetadata({ data: "json, name=hotelId" })
  hotelId?: string;

  @SpeakeasyMetadata({ data: "json, name=languageOptionCode" })
  languageOptionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerItemDetail" })
  partnerItemDetail?: BookingBookRequestBodyItemsPartnerItemDetail;

  @SpeakeasyMetadata({ data: "json, name=pickupPoint" })
  pickupPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=specialRequirements" })
  specialRequirements?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @SpeakeasyMetadata({ data: "json, name=travellers", elemType: BookingBookRequestBodyItemsTravellers })
  travellers?: BookingBookRequestBodyItemsTravellers[];
}


// BookingBookRequestBodyPartnerDetail
/** 
 * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
 * 
**/
export class BookingBookRequestBodyPartnerDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distributorRef" })
  distributorRef?: string;
}


export class BookingBookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booker" })
  booker?: BookingBookRequestBodyBooker;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=demo" })
  demo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: BookingBookRequestBodyItems })
  items?: BookingBookRequestBodyItems[];

  @SpeakeasyMetadata({ data: "json, name=partnerDetail" })
  partnerDetail?: BookingBookRequestBodyPartnerDetail;
}


export class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
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


export class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountRefundable" })
  amountRefundable?: string;

  @SpeakeasyMetadata({ data: "json, name=cancellationFromTourDate", elemType: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate })
  cancellationFromTourDate?: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}


export class BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
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


export class BookingBook200ApplicationJsonDataItemSummaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applePassSupported" })
  applePassSupported?: boolean;

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
  hoursConfirmed?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @SpeakeasyMetadata({ data: "json, name=languageServicesCode" })
  languageServicesCode?: string;

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
  merchantTermsAndConditions?: BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions;

  @SpeakeasyMetadata({ data: "json, name=obfsId" })
  obfsId?: number;

  @SpeakeasyMetadata({ data: "json, name=passbooks" })
  passbooks?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupHotelId" })
  pickupHotelId?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupHotelName" })
  pickupHotelName?: string;

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

  @SpeakeasyMetadata({ data: "json, name=startingTime" })
  startingTime?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierPhoneNumber" })
  supplierPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeDescription" })
  tourGradeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @SpeakeasyMetadata({ data: "json, name=travellerAgeBands", elemType: BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands })
  travellerAgeBands?: BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands[];

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


export class BookingBook200ApplicationJsonData extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingBook200ApplicationJsonDataItemSummaries })
  itemSummaries?: BookingBook200ApplicationJsonDataItemSummaries[];

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @SpeakeasyMetadata({ data: "json, name=omniPreRuleList" })
  omniPreRuleList?: string;

  @SpeakeasyMetadata({ data: "json, name=paypalRedirectURL" })
  paypalRedirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string;

  @SpeakeasyMetadata({ data: "json, name=securityToken" })
  securityToken?: string;

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


export class BookingBook200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: BookingBook200ApplicationJsonData;

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


export class BookingBookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingBookHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingBookRequestBody;
}


export class BookingBookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingBook200ApplicationJsonObject?: BookingBook200ApplicationJson;
}
