from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BookingMybookingsQueryParams:
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    itinerary_or_item_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'itineraryOrItemId', 'style': 'form', 'explode': True }})
    voucher_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voucherKey', 'style': 'form', 'explode': True }})
    

@dataclass
class BookingMybookingsHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class BookingMybookingsRequest:
    query_params: BookingMybookingsQueryParams = field(default=None)
    headers: BookingMybookingsHeaders = field(default=None)
    

@dataclass_json
@dataclass
class BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate:
    day_range_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayRangeMax' }})
    day_range_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayRangeMin' }})
    percentage_refundable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageRefundable' }})
    policy_end_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyEndTimestamp' }})
    policy_start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyStartTimestamp' }})
    

@dataclass_json
@dataclass
class BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditions:
    amount_refundable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountRefundable' }})
    cancellation_from_tour_date: Optional[List[BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationFromTourDate' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    

@dataclass_json
@dataclass
class BookingMybookings200ApplicationJSONDataItemSummariesTravellerAgeBands:
    age_band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageBandId' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    plural_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pluralDescription' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingMybookings200ApplicationJSONDataItemSummaries:
    barcode_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcodeOption' }})
    barcode_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcodeType' }})
    booking_engine_id: Optional[shared.BookingEngineIDResponseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingEngineId' }})
    booking_status: Optional[shared.BookingStatusItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingStatus' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    departs_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departsFrom' }})
    departure_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departurePoint' }})
    departure_point_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departurePointAddress' }})
    departure_point_directions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departurePointDirections' }})
    dest_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destId' }})
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRef' }})
    hours_confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hoursConfirmed' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    language_services_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageServicesLanguageCode' }})
    last_retail_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRetailPrice' }})
    last_retail_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRetailPriceFormatted' }})
    lead_traveller_firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadTravellerFirstname' }})
    lead_traveller_surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadTravellerSurname' }})
    lead_traveller_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadTravellerTitle' }})
    merchant_cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCancellable' }})
    merchant_net_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPrice' }})
    merchant_net_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFormatted' }})
    merchant_terms_and_conditions: Optional[BookingMybookings200ApplicationJSONDataItemSummariesMerchantTermsAndConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantTermsAndConditions' }})
    obfs_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfsId' }})
    passbooks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passbooks' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFormatted' }})
    price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceUSD' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    product_pulled_down: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productPulledDown' }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTitle' }})
    product_widget_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productWidgetList' }})
    rules_applied: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesApplied' }})
    saving_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmount' }})
    saving_amount_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmountFormated' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeCode' }})
    tour_grade_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeDescription' }})
    travel_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDate' }})
    traveller_age_bands: Optional[List[BookingMybookings200ApplicationJSONDataItemSummariesTravellerAgeBands]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travellerAgeBands' }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherKey' }})
    voucher_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherOption' }})
    voucher_requirements: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherRequirements' }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherURL' }})
    vouchers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vouchers' }})
    

@dataclass_json
@dataclass
class BookingMybookings200ApplicationJSONData:
    booker_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookerEmail' }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate' }})
    booking_status: Optional[shared.BookingStatusItinerary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingStatus' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRef' }})
    exchange_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeRate' }})
    has_voucher: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasVoucher' }})
    item_summaries: Optional[List[BookingMybookings200ApplicationJSONDataItemSummaries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemSummaries' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    rules_applied: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesApplied' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPrice' }})
    total_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPriceFormatted' }})
    total_price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPriceUSD' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherKey' }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherURL' }})
    

@dataclass_json
@dataclass
class BookingMybookings200ApplicationJSON:
    data: Optional[BookingMybookings200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingMybookingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_mybookings_200_application_json_object: Optional[BookingMybookings200ApplicationJSON] = field(default=None)
    
