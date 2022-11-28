from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class BookingAvailabilityTourgradesHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesRequestBodyAgeBands:
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandId') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesRequestBody:
    age_bands: Optional[List[BookingAvailabilityTourgradesRequestBodyAgeBands]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageBands') }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired:
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandId') }})
    maximum_count_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumCountRequired') }})
    minimum_count_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCountRequired') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgrades200ApplicationJSONData:
    age_bands: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageBands') }})
    age_bands_required: Optional[List[List[BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageBandsRequired') }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    default_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLanguageCode') }})
    grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeCode') }})
    grade_departure_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeDepartureTime') }})
    grade_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeDescription') }})
    grade_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeTitle') }})
    lang_services: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('langServices') }})
    merchant_net_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPrice') }})
    merchant_net_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPriceFormatted') }})
    retail_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retailPrice') }})
    retail_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retailPriceFormatted') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    unavailable_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unavailableReason') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgrades200ApplicationJSON:
    data: Optional[List[BookingAvailabilityTourgrades200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class BookingAvailabilityTourgradesRequest:
    headers: BookingAvailabilityTourgradesHeaders = field()
    request: Optional[BookingAvailabilityTourgradesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BookingAvailabilityTourgradesResponse:
    content_type: str = field()
    status_code: int = field()
    booking_availability_tourgrades_200_application_json_object: Optional[BookingAvailabilityTourgrades200ApplicationJSON] = field(default=None)
    
