from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BookingCalculatepriceHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BookingCalculatepriceRequestBodyItemsTravellers:
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandId' }})
    

@dataclass_json
@dataclass
class BookingCalculatepriceRequestBodyItems:
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeCode' }})
    travel_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDate' }})
    travellers: Optional[List[BookingCalculatepriceRequestBodyItemsTravellers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travellers' }})
    

@dataclass_json
@dataclass
class BookingCalculatepriceRequestBody:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    items: Optional[List[BookingCalculatepriceRequestBodyItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    

@dataclass
class BookingCalculatepriceRequest:
    headers: BookingCalculatepriceHeaders = field(default=None)
    request: Optional[BookingCalculatepriceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands:
    age_band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageBandId' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    plural_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pluralDescription' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries:
    apple_pass_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applePassSupported' }})
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
    item_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
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
    obfs_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfsId' }})
    passbooks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passbooks' }})
    pickup_hotel_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupHotelId' }})
    pickup_hotel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupHotelName' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceFormatted' }})
    price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceUSD' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    product_pulled_down: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productPulledDown' }})
    product_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTitle' }})
    product_widget_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productWidgetList' }})
    rules_applied: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesApplied' }})
    saving_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmount' }})
    saving_amount_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savingAmountFormated' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    starting_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startingTime' }})
    supplier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplierName' }})
    supplier_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplierPhoneNumber' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeCode' }})
    tour_grade_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeDescription' }})
    travel_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDate' }})
    traveller_age_bands: Optional[List[BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travellerAgeBands' }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherKey' }})
    voucher_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherOption' }})
    voucher_requirements: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherRequirements' }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherURL' }})
    vouchers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vouchers' }})
    

@dataclass_json
@dataclass
class BookingCalculateprice200ApplicationJSONDataItinerary:
    booker_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookerEmail' }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate' }})
    booking_status: Optional[shared.BookingStatusItinerary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingStatus' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRef' }})
    exchange_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeRate' }})
    has_voucher: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasVoucher' }})
    item_summaries: Optional[List[BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemSummaries' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    omni_pre_rule_list: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omniPreRuleList' }})
    paypal_redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paypalRedirectURL' }})
    rules_applied: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesApplied' }})
    security_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityToken' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPrice' }})
    total_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPriceFormatted' }})
    total_price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPriceUSD' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherKey' }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherURL' }})
    

@dataclass_json
@dataclass
class BookingCalculateprice200ApplicationJSONData:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    has_promo_code: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasPromoCode' }})
    itinerary: Optional[BookingCalculateprice200ApplicationJSONDataItinerary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itinerary' }})
    itinerary_from_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryFromPrice' }})
    itinerary_from_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryFromPriceFormatted' }})
    itinerary_new_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryNewPrice' }})
    itinerary_new_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryNewPriceFormatted' }})
    itinerary_saving: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itinerarySaving' }})
    itinerary_saving_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itinerarySavingFormatted' }})
    payment_gateway_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentGatewayInfo' }})
    promo_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promoCode' }})
    promo_code_expired: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promoCodeExpired' }})
    promo_code_valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promoCodeValid' }})
    rules_applied: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesApplied' }})
    

@dataclass_json
@dataclass
class BookingCalculateprice200ApplicationJSON:
    data: Optional[BookingCalculateprice200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingCalculatepriceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_calculateprice_200_application_json_object: Optional[BookingCalculateprice200ApplicationJSON] = field(default=None)
    
