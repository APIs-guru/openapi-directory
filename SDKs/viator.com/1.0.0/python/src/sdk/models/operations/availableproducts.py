from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AvailableProductsHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AvailableProductsRequestBody:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    num_adults: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numAdults' }})
    product_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCodes' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    

@dataclass
class AvailableProductsRequest:
    headers: AvailableProductsHeaders = field(default=None)
    request: Optional[AvailableProductsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote:
    general_retail_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generalRetailPrice' }})
    merchant_net_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPrice' }})
    retail_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retailPrice' }})
    

@dataclass_json
@dataclass
class AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates:
    date_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateList' }})
    price_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFrom' }})
    price_quote: Optional[AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceQuote' }})
    

@dataclass_json
@dataclass
class AvailableProducts200ApplicationJSONDataPasTourGrades:
    avail_dates: Optional[List[AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availDates' }})
    booking_engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingEngine' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    language_services: Optional[dict[str, List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageServices' }})
    sapi: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sapi' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeCode' }})
    

@dataclass_json
@dataclass
class AvailableProducts200ApplicationJSONDataPas:
    incomplete_quote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incompleteQuote' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    removed_child_ages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedChildAges' }})
    tour_grades: Optional[dict[str, AvailableProducts200ApplicationJSONDataPasTourGrades]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGrades' }})
    traveller_mix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travellerMix' }})
    

@dataclass_json
@dataclass
class AvailableProducts200ApplicationJSONData:
    admission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admission' }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    booking_engine_id: Optional[shared.BookingEngineIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingEngineId' }})
    cat_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catIds' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    essential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'essential' }})
    merchant_cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCancellable' }})
    merchant_net_price_from: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFrom' }})
    merchant_net_price_from_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFromFormatted' }})
    on_request_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onRequestPeriod' }})
    on_sale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onSale' }})
    panorama_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'panoramaCount' }})
    pas: Optional[AvailableProducts200ApplicationJSONDataPas] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pas' }})
    photo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoCount' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFormatted' }})
    primary_destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationId' }})
    primary_destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationName' }})
    primary_destination_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationUrlName' }})
    primary_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryGroupId' }})
    product_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productUrlName' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewCount' }})
    rrp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrp' }})
    rrp_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrpFormatted' }})
    saving_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmount' }})
    saving_amount_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmountFormated' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    short_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortTitle' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
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
    translation_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translationLevel' }})
    unique_short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueShortDescription' }})
    video_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCount' }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webURL' }})
    

@dataclass_json
@dataclass
class AvailableProducts200ApplicationJSON:
    data: Optional[List[AvailableProducts200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class AvailableProductsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    available_products_200_application_json_object: Optional[AvailableProducts200ApplicationJSON] = field(default=None)
    
