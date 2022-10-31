from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ProductVoucherOptionEnum(str, Enum):
    VOUCHER_PAPER_ONLY = "VOUCHER_PAPER_ONLY"
    VOUCHER_E = "VOUCHER_E"


@dataclass
class ProductQueryParams:
    code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    currency_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currencyCode', 'style': 'form', 'explode': True }})
    exclude_tour_grade_availability: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeTourGradeAvailability', 'style': 'form', 'explode': True }})
    show_unavailable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showUnavailable', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrderReviewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    voucher_option: Optional[ProductVoucherOptionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'voucherOption', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductRequest:
    query_params: ProductQueryParams = field(default=None)
    headers: ProductHeaders = field(default=None)
    

@dataclass_json
@dataclass
class Product200ApplicationJSONDataAgeBands:
    adult: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adult' }})
    age_from: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageFrom' }})
    age_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageTo' }})
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandId' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    plural_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pluralDescription' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    treat_as_adult: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treatAsAdult' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSONDataBookingQuestions:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    question_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionId' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    string_question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringQuestionId' }})
    sub_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subTitle' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate:
    day_range_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayRangeMax' }})
    day_range_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayRangeMin' }})
    percentage_refundable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageRefundable' }})
    policy_end_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyEndTimestamp' }})
    policy_start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyStartTimestamp' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSONDataMerchantTermsAndConditions:
    amount_refundable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountRefundable' }})
    cancellation_from_tour_date: Optional[List[Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationFromTourDate' }})
    merchant_terms_and_conditions_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantTermsAndConditionsType' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSONDataPassengerAttributes:
    custom_attribute_kgs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttribute_kgs' }})
    custom_attribute_lbs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttribute_lbs' }})
    error_missing_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMissingMessage' }})
    error_validation_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorValidationMessage' }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionId' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    validate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateType' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSONDataProductPhotos:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoURL' }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplier' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSONDataTourGrades:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    default_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguageCode' }})
    grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeCode' }})
    grade_departure_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeDepartureTime' }})
    grade_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeDescription' }})
    grade_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeTitle' }})
    lang_services: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'langServices' }})
    merchant_net_price_from: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFrom' }})
    merchant_net_price_from_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFromFormatted' }})
    price_from: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFrom' }})
    price_from_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFromFormatted' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSONData:
    additional_info: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalInfo' }})
    admission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admission' }})
    age_bands: Optional[List[Product200ApplicationJSONDataAgeBands]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageBands' }})
    all_traveller_names_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allTravellerNamesRequired' }})
    apple_pass_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applePassSupported' }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    booking_engine_id: Optional[shared.BookingEngineIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingEngineId' }})
    booking_questions: Optional[List[Product200ApplicationJSONDataBookingQuestions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingQuestions' }})
    cat_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catIds' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    departure_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departurePoint' }})
    departure_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departureTime' }})
    departure_time_comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departureTimeComments' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationId' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    essential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'essential' }})
    exclusions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusions' }})
    highlights: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highlights' }})
    hotel_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotelPickup' }})
    inclusions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusions' }})
    itinerary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itinerary' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    map_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapURL' }})
    max_traveller_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTravellerCount' }})
    merchant_cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCancellable' }})
    merchant_net_price_from: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFrom' }})
    merchant_net_price_from_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFromFormatted' }})
    merchant_terms_and_conditions: Optional[Product200ApplicationJSONDataMerchantTermsAndConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantTermsAndConditions' }})
    on_request_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onRequestPeriod' }})
    on_sale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onSale' }})
    operates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operates' }})
    panorama_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panoramaCount' }})
    pas: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pas' }})
    passenger_attributes: Optional[List[Product200ApplicationJSONDataPassengerAttributes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passengerAttributes' }})
    photo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoCount' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFormatted' }})
    primary_destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationId' }})
    primary_destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationName' }})
    primary_destination_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationUrlName' }})
    primary_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryGroupId' }})
    product_photos: Optional[List[Product200ApplicationJSONDataProductPhotos]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productPhotos' }})
    product_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productUrlName' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    rating_counts: Optional[shared.RatingCounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingCounts' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    return_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnDetails' }})
    review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewCount' }})
    reviews: Optional[List[shared.ReviewObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviews' }})
    rrp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrp' }})
    rrp_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrpFormatted' }})
    sales_points: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesPoints' }})
    saving_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmount' }})
    saving_amount_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmountFormated' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    short_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortTitle' }})
    special_offer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialOffer' }})
    special_offer_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialOfferAvailable' }})
    special_reservation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialReservation' }})
    special_reservation_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialReservationDetails' }})
    ssl_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslSupported' }})
    sub_cat_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subCatIds' }})
    supplier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplierCode' }})
    supplier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplierName' }})
    thumbnail_hi_res_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailHiResURL' }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailURL' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    tour_grades: Optional[List[Product200ApplicationJSONDataTourGrades]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGrades' }})
    tour_grades_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradesAvailable' }})
    translation_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translationLevel' }})
    user_photos: Optional[List[shared.PhotoObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPhotos' }})
    video_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCount' }})
    videos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    voucher_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherOption' }})
    voucher_requirements: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherRequirements' }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webURL' }})
    

@dataclass_json
@dataclass
class Product200ApplicationJSON:
    data: Optional[Product200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    date_stamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateStamp' }})
    error_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCodes' }})
    error_message: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    error_message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessageText' }})
    error_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorName' }})
    error_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorReference' }})
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorType' }})
    extra_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraInfo' }})
    extra_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extraObject' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    vmid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmid' }})
    

@dataclass
class ProductResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    product_200_application_json_object: Optional[Product200ApplicationJSON] = field(default=None)
    
