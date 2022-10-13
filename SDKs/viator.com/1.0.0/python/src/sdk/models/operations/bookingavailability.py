from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class BookingAvailabilityHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass_json
@dataclass
class BookingAvailabilityRequestBodyAgeBands:
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandId' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    

@dataclass_json
@dataclass
class BookingAvailabilityRequestBody:
    age_bands: Optional[List[BookingAvailabilityRequestBodyAgeBands]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageBands' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    

@dataclass
class BookingAvailabilityRequest:
    headers: BookingAvailabilityHeaders = field(default=None)
    request: Optional[BookingAvailabilityRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class BookingAvailability200ApplicationJSONDataAvailability:
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradeCode' }})
    merchant_net_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPrice' }})
    merchant_net_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFormatted' }})
    retail_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retailPrice' }})
    retail_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retailPriceFormatted' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    unavailable_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unavailableReason' }})
    

@dataclass_json
@dataclass
class BookingAvailability200ApplicationJSONData:
    availability: Optional[List[BookingAvailability200ApplicationJSONDataAvailability]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    first_available_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAvailableDate' }})
    last_available_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAvailableDate' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    

@dataclass_json
@dataclass
class BookingAvailability200ApplicationJSON:
    data: Optional[BookingAvailability200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingAvailabilityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_availability_200_application_json_object: Optional[BookingAvailability200ApplicationJSON] = field(default=None)
    
