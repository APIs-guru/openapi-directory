from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BookingStatusHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass_json
@dataclass
class BookingStatusRequestBody:
    booking_date_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDateFrom' }})
    booking_date_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDateTo' }})
    distributor_item_refs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRefs' }})
    distributor_refs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRefs' }})
    item_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemIds' }})
    lead_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadFirstName' }})
    lead_surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadSurname' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass
class BookingStatusRequest:
    headers: BookingStatusHeaders = field(default=None)
    request: Optional[BookingStatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class BookingStatus200ApplicationJSONDataItemSummaries:
    booking_status: Optional[shared.BookingStatusItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingStatus' }})
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRef' }})
    item_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    travel_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDate' }})
    

@dataclass_json
@dataclass
class BookingStatus200ApplicationJSONData:
    booking_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDate' }})
    booking_status: Optional[shared.BookingStatusItinerary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingStatus' }})
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRef' }})
    item_summaries: Optional[List[BookingStatus200ApplicationJSONDataItemSummaries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemSummaries' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingStatus200ApplicationJSON:
    data: Optional[BookingStatus200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_status_200_application_json_object: Optional[BookingStatus200ApplicationJSON] = field(default=None)
    
