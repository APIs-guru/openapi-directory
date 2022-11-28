from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SearchProductsHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    
class SearchProductsRequestBodySortOrderEnum(str, Enum):
    TOP_SELLERS = "TOP_SELLERS"
    REVIEW_AVG_RATING_A = "REVIEW_AVG_RATING_A"
    REVIEW_AVG_RATING_D = "REVIEW_AVG_RATING_D"
    PRICE_FROM_A = "PRICE_FROM_A"
    PRICE_FROM_D = "PRICE_FROM_D"


@dataclass_json
@dataclass
class SearchProductsRequestBody:
    cat_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catId') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destId') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    seo_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seoId') }})
    sort_order: Optional[SearchProductsRequestBodySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    sub_cat_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCatId') }})
    top_x: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topX') }})
    

@dataclass_json
@dataclass
class SearchProducts200ApplicationJSONData:
    admission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admission') }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    booking_engine_id: Optional[shared.BookingEngineIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingEngineId') }})
    cat_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catIds') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    essential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('essential') }})
    merchant_cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantCancellable') }})
    merchant_net_price_from: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPriceFrom') }})
    merchant_net_price_from_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPriceFromFormatted') }})
    on_request_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onRequestPeriod') }})
    on_sale: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onSale') }})
    panorama_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('panoramaCount') }})
    pas: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pas') }})
    photo_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoCount') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceFormatted') }})
    primary_destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDestinationId') }})
    primary_destination_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDestinationName') }})
    primary_destination_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDestinationUrlName') }})
    primary_group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryGroupId') }})
    product_url_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productUrlName') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewCount') }})
    rrp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrp') }})
    rrpformatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rrpformatted') }})
    saving_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingAmount') }})
    saving_amount_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingAmountFormated') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    short_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortTitle') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    special_offer_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialOfferAvailable') }})
    special_reservation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialReservation') }})
    special_reservation_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialReservationDetails') }})
    ssl_supported: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslSupported') }})
    sub_cat_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCatIds') }})
    supplier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierCode') }})
    supplier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierName') }})
    thumbnail_hi_res_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailHiResURL') }})
    thumbnail_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailURL') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    translation_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('translationLevel') }})
    unique_short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueShortDescription') }})
    video_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoCount') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webURL') }})
    

@dataclass_json
@dataclass
class SearchProducts200ApplicationJSON:
    data: Optional[List[SearchProducts200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    date_stamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateStamp') }})
    error_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCodes') }})
    error_message: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    error_message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessageText') }})
    error_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorName') }})
    error_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorReference') }})
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    extra_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraInfo') }})
    extra_object: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extraObject') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    vmid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmid') }})
    

@dataclass
class SearchProductsRequest:
    headers: SearchProductsHeaders = field()
    request: Optional[SearchProductsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchProductsResponse:
    content_type: str = field()
    status_code: int = field()
    search_products_200_application_json_object: Optional[SearchProducts200ApplicationJSON] = field(default=None)
    
