from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BookingBookHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass_json
@dataclass
class BookingBookRequestBodyBooker:
    cell_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellPhone' }})
    cell_phone_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellPhoneCountryCode' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    firstname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    home_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homePhone' }})
    surname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surname' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class BookingBookRequestBodyItemsBookingQuestionAnswers:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    question_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionId' }})
    

@dataclass_json
@dataclass
class BookingBookRequestBodyItemsPartnerItemDetail:
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRef' }})
    

@dataclass_json
@dataclass
class BookingBookRequestBodyItemsTravellers:
    band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandId' }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    lead_traveller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadTraveller' }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surname' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class BookingBookRequestBodyItems:
    booking_question_answers: Optional[List[BookingBookRequestBodyItemsBookingQuestionAnswers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingQuestionAnswers' }})
    hotel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotelId' }})
    language_option_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageOptionCode' }})
    partner_item_detail: Optional[BookingBookRequestBodyItemsPartnerItemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerItemDetail' }})
    pickup_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupPoint' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    special_requirements: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialRequirements' }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeCode' }})
    travel_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDate' }})
    travellers: Optional[List[BookingBookRequestBodyItemsTravellers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travellers' }})
    

@dataclass_json
@dataclass
class BookingBookRequestBodyPartnerDetail:
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRef' }})
    

@dataclass_json
@dataclass
class BookingBookRequestBody:
    booker: Optional[BookingBookRequestBodyBooker] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booker' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    demo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demo' }})
    items: Optional[List[BookingBookRequestBodyItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    partner_detail: Optional[BookingBookRequestBodyPartnerDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerDetail' }})
    

@dataclass
class BookingBookRequest:
    headers: BookingBookHeaders = field(default=None)
    request: Optional[BookingBookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate:
    day_range_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayRangeMax' }})
    day_range_min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayRangeMin' }})
    percentage_refundable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageRefundable' }})
    policy_end_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyEndTimestamp' }})
    policy_start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyStartTimestamp' }})
    

@dataclass_json
@dataclass
class BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions:
    amount_refundable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountRefundable' }})
    cancellation_from_tour_date: Optional[List[BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationFromTourDate' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    

@dataclass_json
@dataclass
class BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands:
    age_band_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageBandId' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    plural_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pluralDescription' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingBook200ApplicationJSONDataItemSummaries:
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
    hours_confirmed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hoursConfirmed' }})
    item_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    language_services_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageServicesCode' }})
    last_retail_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRetailPrice' }})
    last_retail_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRetailPriceFormatted' }})
    lead_traveller_firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadTravellerFirstname' }})
    lead_traveller_surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadTravellerSurname' }})
    lead_traveller_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadTravellerTitle' }})
    merchant_cancellable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCancellable' }})
    merchant_net_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPrice' }})
    merchant_net_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNetPriceFormatted' }})
    merchant_terms_and_conditions: Optional[BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantTermsAndConditions' }})
    obfs_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfsId' }})
    passbooks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passbooks' }})
    pickup_hotel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupHotelId' }})
    pickup_hotel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupHotelName' }})
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
    starting_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startingTime' }})
    supplier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplierName' }})
    supplier_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplierPhoneNumber' }})
    terms_and_conditions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    tour_grade_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeCode' }})
    tour_grade_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tourGradeDescription' }})
    travel_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDate' }})
    traveller_age_bands: Optional[List[BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travellerAgeBands' }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherKey' }})
    voucher_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherOption' }})
    voucher_requirements: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherRequirements' }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherURL' }})
    vouchers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vouchers' }})
    

@dataclass_json
@dataclass
class BookingBook200ApplicationJSONData:
    booker_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookerEmail' }})
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate' }})
    booking_status: Optional[shared.BookingStatusItinerary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingStatus' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRef' }})
    exchange_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeRate' }})
    has_voucher: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasVoucher' }})
    item_summaries: Optional[List[BookingBook200ApplicationJSONDataItemSummaries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemSummaries' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    omni_pre_rule_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'omniPreRuleList' }})
    paypal_redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paypalRedirectURL' }})
    rules_applied: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesApplied' }})
    security_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityToken' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPrice' }})
    total_price_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPriceFormatted' }})
    total_price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPriceUSD' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    voucher_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherKey' }})
    voucher_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voucherURL' }})
    

@dataclass_json
@dataclass
class BookingBook200ApplicationJSON:
    data: Optional[BookingBook200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingBookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_book_200_application_json_object: Optional[BookingBook200ApplicationJSON] = field(default=None)
    
