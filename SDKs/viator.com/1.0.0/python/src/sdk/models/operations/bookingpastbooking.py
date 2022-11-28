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
class BookingPastbookingQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    item_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'itemId', 'style': 'form', 'explode': True }})
    voucher_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voucherKey', 'style': 'form', 'explode': True }})
    

@dataclass
class BookingPastbookingHeaders:
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate:
    day_range_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayRangeMax') }})
    day_range_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayRangeMin') }})
    percentage_refundable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageRefundable') }})
    policy_end_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyEndTimestamp') }})
    policy_start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyStartTimestamp') }})
    

@dataclass_json
@dataclass
class BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditions:
    amount_refundable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountRefundable') }})
    cancellation_from_tour_date: Optional[List[BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationFromTourDate') }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    

@dataclass_json
@dataclass
class BookingPastbooking200ApplicationJSONDataItemSummariesTravellerAgeBands:
    age_band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageBandId') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    plural_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pluralDescription') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass_json
@dataclass
class BookingPastbooking200ApplicationJSONDataItemSummaries:
    barcode_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeOption') }})
    barcode_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeType') }})
    booking_engine_id: Optional[shared.BookingEngineIDResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingEngineId') }})
    booking_status: Optional[shared.BookingStatusItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingStatus') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    departs_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departsFrom') }})
    departure_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departurePoint') }})
    departure_point_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departurePointAddress') }})
    departure_point_directions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departurePointDirections') }})
    dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destId') }})
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributorItemRef') }})
    hours_confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hoursConfirmed') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itineraryId') }})
    language_services_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageServicesLanguageCode') }})
    last_retail_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRetailPrice') }})
    last_retail_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRetailPriceFormatted') }})
    lead_traveller_firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadTravellerFirstname') }})
    lead_traveller_surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadTravellerSurname') }})
    lead_traveller_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leadTravellerTitle') }})
    merchant_cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantCancellable') }})
    merchant_net_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPrice') }})
    merchant_net_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNetPriceFormatted') }})
    merchant_terms_and_conditions: Optional[BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantTermsAndConditions') }})
    obfs_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfsId') }})
    passbooks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passbooks') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceFormatted') }})
    price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceUSD') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCode') }})
    product_pulled_down: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productPulledDown') }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTitle') }})
    product_widget_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productWidgetList') }})
    rules_applied: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesApplied') }})
    saving_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingAmount') }})
    saving_amount_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingAmountFormated') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tourGradeCode') }})
    tour_grade_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tourGradeDescription') }})
    travel_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('travelDate') }})
    traveller_age_bands: Optional[List[BookingPastbooking200ApplicationJSONDataItemSummariesTravellerAgeBands]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('travellerAgeBands') }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucherKey') }})
    voucher_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucherOption') }})
    voucher_requirements: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucherRequirements') }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucherURL') }})
    vouchers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vouchers') }})
    

@dataclass_json
@dataclass
class BookingPastbooking200ApplicationJSONData:
    r"""BookingPastbooking200ApplicationJSONData
    **object** containing pricing matrix information
    """
    
    booker_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookerEmail') }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingDate') }})
    booking_status: Optional[shared.BookingStatusItinerary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingStatus') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributorRef') }})
    exchange_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchangeRate') }})
    has_voucher: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasVoucher') }})
    item_summaries: Optional[List[BookingPastbooking200ApplicationJSONDataItemSummaries]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemSummaries') }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itineraryId') }})
    rules_applied: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rulesApplied') }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPrice') }})
    total_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPriceFormatted') }})
    total_price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPriceUSD') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucherKey') }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voucherURL') }})
    

@dataclass_json
@dataclass
class BookingPastbooking200ApplicationJSON:
    data: Optional[BookingPastbooking200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class BookingPastbookingRequest:
    headers: BookingPastbookingHeaders = field()
    query_params: BookingPastbookingQueryParams = field()
    

@dataclass
class BookingPastbookingResponse:
    content_type: str = field()
    status_code: int = field()
    booking_pastbooking_200_application_json_object: Optional[BookingPastbooking200ApplicationJSON] = field(default=None)
    
