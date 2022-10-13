from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchProductsCodesHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass_json
@dataclass
class SearchProductsCodesRequestBody:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    product_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCodes' }})
    

@dataclass
class SearchProductsCodesRequest:
    headers: SearchProductsCodesHeaders = field(default=None)
    request: Optional[SearchProductsCodesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class SearchProductsCodes200ApplicationJSONData:
    admission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admission' }})
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
    pas: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pas' }})
    photo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoCount' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFormatted' }})
    primary_destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationId' }})
    primary_destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDestinationName' }})
    primary_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryGroupId' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewCount' }})
    rrp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrp' }})
    rrpformatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rrpformatted' }})
    saving_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmount' }})
    saving_amount_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmountFormated' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    short_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortTitle' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    special_offer_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialOfferAvailable' }})
    special_reservation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialReservation' }})
    special_reservation_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialReservationDetails' }})
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
class SearchProductsCodes200ApplicationJSON:
    data: Optional[List[SearchProductsCodes200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class SearchProductsCodesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    search_products_codes_200_application_json_object: Optional[SearchProductsCodes200ApplicationJSON] = field(default=None)
    
