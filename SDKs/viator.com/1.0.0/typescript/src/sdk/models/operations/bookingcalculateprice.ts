import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BookingCalculatepriceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingCalculatepriceRequestBodyItemsTravellers extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandId" })
  bandId?: number;
}


export class BookingCalculatepriceRequestBodyItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @Metadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @Metadata({ data: "json, name=travellers", elemType: operations.BookingCalculatepriceRequestBodyItemsTravellers })
  travellers?: BookingCalculatepriceRequestBodyItemsTravellers[];
}


export class BookingCalculatepriceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=items", elemType: operations.BookingCalculatepriceRequestBodyItems })
  items?: BookingCalculatepriceRequestBodyItems[];
}


export class BookingCalculatepriceRequest extends SpeakeasyBase {
  @Metadata()
  headers: BookingCalculatepriceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: BookingCalculatepriceRequestBody;
}


export class BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands extends SpeakeasyBase {
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


export class BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries extends SpeakeasyBase {
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
  hoursConfirmed?: number;

  @Metadata({ data: "json, name=itemId" })
  itemId?: number;

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

  @Metadata({ data: "json, name=obfsId" })
  obfsId?: number;

  @Metadata({ data: "json, name=passbooks" })
  passbooks?: string;

  @Metadata({ data: "json, name=pickupHotelId" })
  pickupHotelId?: number;

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
  rulesApplied?: string[];

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
  termsAndConditions?: string;

  @Metadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @Metadata({ data: "json, name=tourGradeDescription" })
  tourGradeDescription?: string;

  @Metadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @Metadata({ data: "json, name=travellerAgeBands", elemType: operations.BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands })
  travellerAgeBands?: BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands[];

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


// BookingCalculateprice200ApplicationJsonDataItinerary
/** 
 * **summary results** for all itinerary items
**/
export class BookingCalculateprice200ApplicationJsonDataItinerary extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=itemSummaries", elemType: operations.BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries })
  itemSummaries?: BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries[];

  @Metadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @Metadata({ data: "json, name=omniPreRuleList" })
  omniPreRuleList?: number;

  @Metadata({ data: "json, name=paypalRedirectURL" })
  paypalRedirectUrl?: string;

  @Metadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string[];

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
  userId?: number;

  @Metadata({ data: "json, name=voucherKey" })
  voucherKey?: string;

  @Metadata({ data: "json, name=voucherURL" })
  voucherUrl?: string;
}


export class BookingCalculateprice200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=hasPromoCode" })
  hasPromoCode?: boolean;

  @Metadata({ data: "json, name=itinerary" })
  itinerary?: BookingCalculateprice200ApplicationJsonDataItinerary;

  @Metadata({ data: "json, name=itineraryFromPrice" })
  itineraryFromPrice?: number;

  @Metadata({ data: "json, name=itineraryFromPriceFormatted" })
  itineraryFromPriceFormatted?: string;

  @Metadata({ data: "json, name=itineraryNewPrice" })
  itineraryNewPrice?: number;

  @Metadata({ data: "json, name=itineraryNewPriceFormatted" })
  itineraryNewPriceFormatted?: string;

  @Metadata({ data: "json, name=itinerarySaving" })
  itinerarySaving?: number;

  @Metadata({ data: "json, name=itinerarySavingFormatted" })
  itinerarySavingFormatted?: string;

  @Metadata({ data: "json, name=paymentGatewayInfo" })
  paymentGatewayInfo?: string;

  @Metadata({ data: "json, name=promoCode" })
  promoCode?: string;

  @Metadata({ data: "json, name=promoCodeExpired" })
  promoCodeExpired?: boolean;

  @Metadata({ data: "json, name=promoCodeValid" })
  promoCodeValid?: boolean;

  @Metadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string[];
}


export class BookingCalculateprice200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: BookingCalculateprice200ApplicationJsonData;

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


export class BookingCalculatepriceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bookingCalculateprice200ApplicationJsonObject?: BookingCalculateprice200ApplicationJson;
}
