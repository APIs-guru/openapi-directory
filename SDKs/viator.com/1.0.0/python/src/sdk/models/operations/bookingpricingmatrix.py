from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class BookingPricingmatrixHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass_json
@dataclass
class BookingPricingmatrixRequestBody:
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeCode' }})
    

@dataclass
class BookingPricingmatrixRequest:
    headers: BookingPricingmatrixHeaders = field(default=None)
    request: Optional[BookingPricingmatrixRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    merchant_net_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPrice' }})
    merchant_net_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFormatted' }})
    min_no_of_travellers_required_for_price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minNoOfTravellersRequiredForPrice' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFormatted' }})
    sort_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingPricingmatrix200ApplicationJSONDataAgeBandPrices:
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandId' }})
    maximum_count_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumCountRequired' }})
    minimum_count_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumCountRequired' }})
    prices: Optional[List[BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingPricingmatrix200ApplicationJSONData:
    age_band_prices: Optional[List[BookingPricingmatrix200ApplicationJSONDataAgeBandPrices]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageBandPrices' }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate' }})
    pricing_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingUnit' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingPricingmatrix200ApplicationJSON:
    data: Optional[List[BookingPricingmatrix200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingPricingmatrixResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_pricingmatrix_200_application_json_object: Optional[BookingPricingmatrix200ApplicationJSON] = field(default=None)
    
