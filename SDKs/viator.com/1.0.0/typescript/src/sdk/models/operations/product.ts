import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ProductVoucherOptionEnum {
    VoucherPaperOnly = "VOUCHER_PAPER_ONLY"
,    VoucherE = "VOUCHER_E"
}


export class ProductQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeTourGradeAvailability" })
  excludeTourGradeAvailability?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showUnavailable" })
  showUnavailable?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: shared.SortOrderReviewEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=voucherOption" })
  voucherOption?: ProductVoucherOptionEnum;
}


export class ProductHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class ProductRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ProductQueryParams;

  @Metadata()
  headers: ProductHeaders;
}


export class Product200ApplicationJsonDataAgeBands extends SpeakeasyBase {
  @Metadata({ data: "json, name=adult" })
  adult?: boolean;

  @Metadata({ data: "json, name=ageFrom" })
  ageFrom?: number;

  @Metadata({ data: "json, name=ageTo" })
  ageTo?: number;

  @Metadata({ data: "json, name=bandId" })
  bandId?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=pluralDescription" })
  pluralDescription?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=treatAsAdult" })
  treatAsAdult?: boolean;
}


export class Product200ApplicationJsonDataBookingQuestions extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=questionId" })
  questionId?: number;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=stringQuestionId" })
  stringQuestionId?: string;

  @Metadata({ data: "json, name=subTitle" })
  subTitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
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


export class Product200ApplicationJsonDataMerchantTermsAndConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountRefundable" })
  amountRefundable?: number;

  @Metadata({ data: "json, name=cancellationFromTourDate", elemType: operations.Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate })
  cancellationFromTourDate?: Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate[];

  @Metadata({ data: "json, name=merchantTermsAndConditionsType" })
  merchantTermsAndConditionsType?: number;

  @Metadata({ data: "json, name=termsAndConditions" })
  termsAndConditions?: string;
}


export class Product200ApplicationJsonDataPassengerAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=customAttribute_kgs" })
  customAttributeKgs?: string;

  @Metadata({ data: "json, name=customAttribute_lbs" })
  customAttributeLbs?: string;

  @Metadata({ data: "json, name=errorMissingMessage" })
  errorMissingMessage?: string;

  @Metadata({ data: "json, name=errorValidationMessage" })
  errorValidationMessage?: string;

  @Metadata({ data: "json, name=questionId" })
  questionId?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=validateType" })
  validateType?: string;
}


export class Product200ApplicationJsonDataProductPhotos extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=photoURL" })
  photoUrl?: string;

  @Metadata({ data: "json, name=supplier" })
  supplier?: string;
}


export class Product200ApplicationJsonDataTourGrades extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @Metadata({ data: "json, name=gradeCode" })
  gradeCode?: string;

  @Metadata({ data: "json, name=gradeDepartureTime" })
  gradeDepartureTime?: string;

  @Metadata({ data: "json, name=gradeDescription" })
  gradeDescription?: string;

  @Metadata({ data: "json, name=gradeTitle" })
  gradeTitle?: string;

  @Metadata({ data: "json, name=langServices" })
  langServices?: Map<string, string>;

  @Metadata({ data: "json, name=merchantNetPriceFrom" })
  merchantNetPriceFrom?: number;

  @Metadata({ data: "json, name=merchantNetPriceFromFormatted" })
  merchantNetPriceFromFormatted?: string;

  @Metadata({ data: "json, name=priceFrom" })
  priceFrom?: number;

  @Metadata({ data: "json, name=priceFromFormatted" })
  priceFromFormatted?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}


// Product200ApplicationJsonData
/** 
 * **object** containing product details
**/
export class Product200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInfo" })
  additionalInfo?: string[];

  @Metadata({ data: "json, name=admission" })
  admission?: string;

  @Metadata({ data: "json, name=ageBands", elemType: operations.Product200ApplicationJsonDataAgeBands })
  ageBands?: Product200ApplicationJsonDataAgeBands[];

  @Metadata({ data: "json, name=allTravellerNamesRequired" })
  allTravellerNamesRequired?: boolean;

  @Metadata({ data: "json, name=applePassSupported" })
  applePassSupported?: boolean;

  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=bookingEngineId" })
  bookingEngineId?: shared.BookingEngineIdEnum;

  @Metadata({ data: "json, name=bookingQuestions", elemType: operations.Product200ApplicationJsonDataBookingQuestions })
  bookingQuestions?: Product200ApplicationJsonDataBookingQuestions[];

  @Metadata({ data: "json, name=catIds" })
  catIds?: number[];

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=departurePoint" })
  departurePoint?: string;

  @Metadata({ data: "json, name=departureTime" })
  departureTime?: string;

  @Metadata({ data: "json, name=departureTimeComments" })
  departureTimeComments?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destinationId" })
  destinationId?: number;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=essential" })
  essential?: string;

  @Metadata({ data: "json, name=exclusions" })
  exclusions?: string[];

  @Metadata({ data: "json, name=highlights" })
  highlights?: number;

  @Metadata({ data: "json, name=hotelPickup" })
  hotelPickup?: boolean;

  @Metadata({ data: "json, name=inclusions" })
  inclusions?: string[];

  @Metadata({ data: "json, name=itinerary" })
  itinerary?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=mapURL" })
  mapUrl?: string;

  @Metadata({ data: "json, name=maxTravellerCount" })
  maxTravellerCount?: number;

  @Metadata({ data: "json, name=merchantCancellable" })
  merchantCancellable?: boolean;

  @Metadata({ data: "json, name=merchantNetPriceFrom" })
  merchantNetPriceFrom?: number;

  @Metadata({ data: "json, name=merchantNetPriceFromFormatted" })
  merchantNetPriceFromFormatted?: string;

  @Metadata({ data: "json, name=merchantTermsAndConditions" })
  merchantTermsAndConditions?: Product200ApplicationJsonDataMerchantTermsAndConditions;

  @Metadata({ data: "json, name=onRequestPeriod" })
  onRequestPeriod?: number;

  @Metadata({ data: "json, name=onSale" })
  onSale?: boolean;

  @Metadata({ data: "json, name=operates" })
  operates?: string;

  @Metadata({ data: "json, name=panoramaCount" })
  panoramaCount?: number;

  @Metadata({ data: "json, name=pas" })
  pas?: Map<string, any>;

  @Metadata({ data: "json, name=passengerAttributes", elemType: operations.Product200ApplicationJsonDataPassengerAttributes })
  passengerAttributes?: Product200ApplicationJsonDataPassengerAttributes[];

  @Metadata({ data: "json, name=photoCount" })
  photoCount?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=priceFormatted" })
  priceFormatted?: string;

  @Metadata({ data: "json, name=primaryDestinationId" })
  primaryDestinationId?: number;

  @Metadata({ data: "json, name=primaryDestinationName" })
  primaryDestinationName?: string;

  @Metadata({ data: "json, name=primaryDestinationUrlName" })
  primaryDestinationUrlName?: string;

  @Metadata({ data: "json, name=primaryGroupId" })
  primaryGroupId?: string;

  @Metadata({ data: "json, name=productPhotos", elemType: operations.Product200ApplicationJsonDataProductPhotos })
  productPhotos?: Product200ApplicationJsonDataProductPhotos[];

  @Metadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: number;

  @Metadata({ data: "json, name=ratingCounts" })
  ratingCounts?: shared.RatingCounts;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=returnDetails" })
  returnDetails?: string;

  @Metadata({ data: "json, name=reviewCount" })
  reviewCount?: number;

  @Metadata({ data: "json, name=reviews", elemType: shared.ReviewObject })
  reviews?: shared.ReviewObject[];

  @Metadata({ data: "json, name=rrp" })
  rrp?: number;

  @Metadata({ data: "json, name=rrpFormatted" })
  rrpFormatted?: string;

  @Metadata({ data: "json, name=salesPoints" })
  salesPoints?: string[];

  @Metadata({ data: "json, name=savingAmount" })
  savingAmount?: string;

  @Metadata({ data: "json, name=savingAmountFormated" })
  savingAmountFormated?: string;

  @Metadata({ data: "json, name=shortDescription" })
  shortDescription?: string;

  @Metadata({ data: "json, name=shortTitle" })
  shortTitle?: string;

  @Metadata({ data: "json, name=specialOffer" })
  specialOffer?: string;

  @Metadata({ data: "json, name=specialOfferAvailable" })
  specialOfferAvailable?: boolean;

  @Metadata({ data: "json, name=specialReservation" })
  specialReservation?: boolean;

  @Metadata({ data: "json, name=specialReservationDetails" })
  specialReservationDetails?: string;

  @Metadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @Metadata({ data: "json, name=subCatIds" })
  subCatIds?: number[];

  @Metadata({ data: "json, name=supplierCode" })
  supplierCode?: string;

  @Metadata({ data: "json, name=supplierName" })
  supplierName?: string;

  @Metadata({ data: "json, name=thumbnailHiResURL" })
  thumbnailHiResUrl?: string;

  @Metadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=tourGrades", elemType: operations.Product200ApplicationJsonDataTourGrades })
  tourGrades?: Product200ApplicationJsonDataTourGrades[];

  @Metadata({ data: "json, name=tourGradesAvailable" })
  tourGradesAvailable?: boolean;

  @Metadata({ data: "json, name=translationLevel" })
  translationLevel?: number;

  @Metadata({ data: "json, name=userPhotos", elemType: shared.PhotoObject })
  userPhotos?: shared.PhotoObject[];

  @Metadata({ data: "json, name=videoCount" })
  videoCount?: number;

  @Metadata({ data: "json, name=videos" })
  videos?: string;

  @Metadata({ data: "json, name=voucherOption" })
  voucherOption?: string;

  @Metadata({ data: "json, name=voucherRequirements" })
  voucherRequirements?: any;

  @Metadata({ data: "json, name=webURL" })
  webUrl?: string;
}


export class Product200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Product200ApplicationJsonData;

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


export class ProductResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  product200ApplicationJsonObject?: Product200ApplicationJson;
}
