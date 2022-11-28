from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class BookingAvailabilityTourgradesPricingmatrixHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrixRequestBody:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    merchant_net_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPrice') }})
    merchant_net_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPriceFormatted') }})
    min_no_of_travellers_required_for_price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNoOfTravellersRequiredForPrice') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceFormatted') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices:
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandId') }})
    maximum_count_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumCountRequired') }})
    minimum_count_required: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumCountRequired') }})
    prices: Optional[List[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix:
    age_band_prices: Optional[List[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageBandPrices') }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    pricing_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingUnit') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades:
    grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeCode') }})
    grade_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gradeTitle') }})
    pricing_matrix: Optional[List[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingMatrix') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates:
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    call_for_last_min_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callForLastMinAvailability') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    tour_grades: Optional[List[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tourGrades') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData:
    booking_month: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingMonth') }})
    dates: Optional[List[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dates') }})
    pricing_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingUnit') }})
    

@dataclass_json
@dataclass
class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON:
    data: Optional[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class BookingAvailabilityTourgradesPricingmatrixRequest:
    headers: BookingAvailabilityTourgradesPricingmatrixHeaders = field()
    request: Optional[BookingAvailabilityTourgradesPricingmatrixRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BookingAvailabilityTourgradesPricingmatrixResponse:
    content_type: str = field()
    status_code: int = field()
    booking_availability_tourgrades_pricingmatrix_200_application_json_object: Optional[BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON] = field(default=None)
    
