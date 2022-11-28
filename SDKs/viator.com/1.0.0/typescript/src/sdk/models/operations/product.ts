import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ProductVoucherOptionEnum {
    VoucherPaperOnly = "VOUCHER_PAPER_ONLY",
    VoucherE = "VOUCHER_E"
}


export class ProductQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeTourGradeAvailability" })
  excludeTourGradeAvailability?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showUnavailable" })
  showUnavailable?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: shared.SortOrderReviewEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=voucherOption" })
  voucherOption?: ProductVoucherOptionEnum;
}


export class ProductHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class Product200ApplicationJsonDataAgeBands extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adult" })
  adult?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ageFrom" })
  ageFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=ageTo" })
  ageTo?: number;

  @SpeakeasyMetadata({ data: "json, name=bandId" })
  bandId?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=pluralDescription" })
  pluralDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=treatAsAdult" })
  treatAsAdult?: boolean;
}


export class Product200ApplicationJsonDataBookingQuestions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=questionId" })
  questionId?: number;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=stringQuestionId" })
  stringQuestionId?: string;

  @SpeakeasyMetadata({ data: "json, name=subTitle" })
  subTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
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


export class Product200ApplicationJsonDataMerchantTermsAndConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountRefundable" })
  amountRefundable?: number;

  @SpeakeasyMetadata({ data: "json, name=cancellationFromTourDate", elemType: Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate })
  cancellationFromTourDate?: Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate[];

  @SpeakeasyMetadata({ data: "json, name=merchantTermsAndConditionsType" })
  merchantTermsAndConditionsType?: number;

  @SpeakeasyMetadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}


export class Product200ApplicationJsonDataPassengerAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customAttribute_kgs" })
  customAttributeKgs?: string;

  @SpeakeasyMetadata({ data: "json, name=customAttribute_lbs" })
  customAttributeLbs?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMissingMessage" })
  errorMissingMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=errorValidationMessage" })
  errorValidationMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=questionId" })
  questionId?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=validateType" })
  validateType?: string;
}


export class Product200ApplicationJsonDataProductPhotos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=photoURL" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: string;
}


export class Product200ApplicationJsonDataTourGrades extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeDepartureTime" })
  gradeDepartureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeDescription" })
  gradeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=gradeTitle" })
  gradeTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=langServices" })
  langServices?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" })
  merchantNetPriceFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" })
  merchantNetPriceFromFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=priceFrom" })
  priceFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=priceFromFormatted" })
  priceFromFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


// Product200ApplicationJsonData
/** 
 * **object** containing product details
**/
export class Product200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInfo" })
  additionalInfo?: string[];

  @SpeakeasyMetadata({ data: "json, name=admission" })
  admission?: string;

  @SpeakeasyMetadata({ data: "json, name=ageBands", elemType: Product200ApplicationJsonDataAgeBands })
  ageBands?: Product200ApplicationJsonDataAgeBands[];

  @SpeakeasyMetadata({ data: "json, name=allTravellerNamesRequired" })
  allTravellerNamesRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applePassSupported" })
  applePassSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bookingEngineId" })
  bookingEngineId?: shared.BookingEngineIdEnum;

  @SpeakeasyMetadata({ data: "json, name=bookingQuestions", elemType: Product200ApplicationJsonDataBookingQuestions })
  bookingQuestions?: Product200ApplicationJsonDataBookingQuestions[];

  @SpeakeasyMetadata({ data: "json, name=catIds" })
  catIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=departurePoint" })
  departurePoint?: string;

  @SpeakeasyMetadata({ data: "json, name=departureTime" })
  departureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=departureTimeComments" })
  departureTimeComments?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationId" })
  destinationId?: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=essential" })
  essential?: string;

  @SpeakeasyMetadata({ data: "json, name=exclusions" })
  exclusions?: string[];

  @SpeakeasyMetadata({ data: "json, name=highlights" })
  highlights?: number;

  @SpeakeasyMetadata({ data: "json, name=hotelPickup" })
  hotelPickup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inclusions" })
  inclusions?: string[];

  @SpeakeasyMetadata({ data: "json, name=itinerary" })
  itinerary?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=mapURL" })
  mapUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=maxTravellerCount" })
  maxTravellerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantCancellable" })
  merchantCancellable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFrom" })
  merchantNetPriceFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantNetPriceFromFormatted" })
  merchantNetPriceFromFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantTermsAndConditions" })
  merchantTermsAndConditions?: Product200ApplicationJsonDataMerchantTermsAndConditions;

  @SpeakeasyMetadata({ data: "json, name=onRequestPeriod" })
  onRequestPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=onSale" })
  onSale?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operates" })
  operates?: string;

  @SpeakeasyMetadata({ data: "json, name=panoramaCount" })
  panoramaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=pas" })
  pas?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=passengerAttributes", elemType: Product200ApplicationJsonDataPassengerAttributes })
  passengerAttributes?: Product200ApplicationJsonDataPassengerAttributes[];

  @SpeakeasyMetadata({ data: "json, name=photoCount" })
  photoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationId" })
  primaryDestinationId?: number;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationName" })
  primaryDestinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryDestinationUrlName" })
  primaryDestinationUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryGroupId" })
  primaryGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=productPhotos", elemType: Product200ApplicationJsonDataProductPhotos })
  productPhotos?: Product200ApplicationJsonDataProductPhotos[];

  @SpeakeasyMetadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=ratingCounts" })
  ratingCounts?: shared.RatingCounts;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=returnDetails" })
  returnDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=reviewCount" })
  reviewCount?: number;

  @SpeakeasyMetadata({ data: "json, name=reviews", elemType: shared.ReviewObject })
  reviews?: shared.ReviewObject[];

  @SpeakeasyMetadata({ data: "json, name=rrp" })
  rrp?: number;

  @SpeakeasyMetadata({ data: "json, name=rrpFormatted" })
  rrpFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=salesPoints" })
  salesPoints?: string[];

  @SpeakeasyMetadata({ data: "json, name=savingAmount" })
  savingAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=savingAmountFormated" })
  savingAmountFormated?: string;

  @SpeakeasyMetadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=specialOffer" })
  specialOffer?: string;

  @SpeakeasyMetadata({ data: "json, name=specialOfferAvailable" })
  specialOfferAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=specialReservation" })
  specialReservation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=specialReservationDetails" })
  specialReservationDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subCatIds" })
  subCatIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=supplierCode" })
  supplierCode?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailHiResURL" })
  thumbnailHiResUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=tourGrades", elemType: Product200ApplicationJsonDataTourGrades })
  tourGrades?: Product200ApplicationJsonDataTourGrades[];

  @SpeakeasyMetadata({ data: "json, name=tourGradesAvailable" })
  tourGradesAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=translationLevel" })
  translationLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=userPhotos", elemType: shared.PhotoObject })
  userPhotos?: shared.PhotoObject[];

  @SpeakeasyMetadata({ data: "json, name=videoCount" })
  videoCount?: number;

  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherOption" })
  voucherOption?: string;

  @SpeakeasyMetadata({ data: "json, name=voucherRequirements" })
  voucherRequirements?: any;

  @SpeakeasyMetadata({ data: "json, name=webURL" })
  webUrl?: string;
}


export class Product200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Product200ApplicationJsonData;

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


export class ProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProductQueryParams;

  @SpeakeasyMetadata()
  headers: ProductHeaders;
}


export class ProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  product200ApplicationJsonObject?: Product200ApplicationJson;
}
