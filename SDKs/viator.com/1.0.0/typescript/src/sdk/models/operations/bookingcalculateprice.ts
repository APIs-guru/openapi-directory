import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BookingCalculatepriceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class BookingCalculatepriceRequestBodyItemsTravellers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;
}


export class BookingCalculatepriceRequestBodyItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @SpeakeasyMetadata({ data: "json, name=travellers", elemType: BookingCalculatepriceRequestBodyItemsTravellers })
  travellers?: BookingCalculatepriceRequestBodyItemsTravellers[];
}


export class BookingCalculatepriceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: BookingCalculatepriceRequestBodyItems })
  items?: BookingCalculatepriceRequestBodyItems[];
}


export class BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands extends SpeakeasyBase {
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


export class BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries extends SpeakeasyBase {
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
  hoursConfirmed?: number;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;

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

  @SpeakeasyMetadata({ data: "json, name=obfsId" })
  obfsId?: number;

  @SpeakeasyMetadata({ data: "json, name=passbooks" })
  passbooks?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupHotelId" })
  pickupHotelId?: number;

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
  rulesApplied?: string[];

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
  termsAndConditions?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeCode" })
  tourGradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGradeDescription" })
  tourGradeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=travelDate" })
  travelDate?: string;

  @SpeakeasyMetadata({ data: "json, name=travellerAgeBands", elemType: BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands })
  travellerAgeBands?: BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands[];

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


// BookingCalculateprice200ApplicationJsonDataItinerary
/** 
 * **summary results** for all itinerary items
**/
export class BookingCalculateprice200ApplicationJsonDataItinerary extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=itemSummaries", elemType: BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries })
  itemSummaries?: BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries[];

  @SpeakeasyMetadata({ data: "json, name=itineraryId" })
  itineraryId?: number;

  @SpeakeasyMetadata({ data: "json, name=omniPreRuleList" })
  omniPreRuleList?: number;

  @SpeakeasyMetadata({ data: "json, name=paypalRedirectURL" })
  paypalRedirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string[];

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
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=voucherKey" })
  voucherKey?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherURL" })
  voucherUrl?: string;
}


export class BookingCalculateprice200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=hasPromoCode" })
  hasPromoCode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itinerary" })
  itinerary?: BookingCalculateprice200ApplicationJsonDataItinerary;

  @SpeakeasyMetadata({ data: "json, name=itineraryFromPrice" })
  itineraryFromPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=itineraryFromPriceFormatted" })
  itineraryFromPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=itineraryNewPrice" })
  itineraryNewPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=itineraryNewPriceFormatted" })
  itineraryNewPriceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=itinerarySaving" })
  itinerarySaving?: number;

  @SpeakeasyMetadata({ data: "json, name=itinerarySavingFormatted" })
  itinerarySavingFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentGatewayInfo" })
  paymentGatewayInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=promoCode" })
  promoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=promoCodeExpired" })
  promoCodeExpired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=promoCodeValid" })
  promoCodeValid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rulesApplied" })
  rulesApplied?: string[];
}


export class BookingCalculateprice200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: BookingCalculateprice200ApplicationJsonData;

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


export class BookingCalculatepriceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BookingCalculatepriceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: BookingCalculatepriceRequestBody;
}


export class BookingCalculatepriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bookingCalculateprice200ApplicationJsonObject?: BookingCalculateprice200ApplicationJson;
}
