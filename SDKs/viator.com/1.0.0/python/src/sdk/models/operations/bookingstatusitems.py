from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class BookingStatusItemsHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BookingStatusItemsRequestBody:
    booking_date_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDateFrom' }})
    booking_date_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingDateTo' }})
    distributor_item_refs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRefs' }})
    distributor_refs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRefs' }})
    item_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemIds' }})
    lead_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadFirstName' }})
    lead_surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leadSurname' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass
class BookingStatusItemsRequest:
    headers: BookingStatusItemsHeaders = field(default=None)
    request: Optional[BookingStatusItemsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class BookingStatusItems200ApplicationJSONData:
    booking_status: Optional[shared.BookingStatusItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingStatus' }})
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRef' }})
    item_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    

@dataclass_json
@dataclass
class BookingStatusItems200ApplicationJSON:
    data: Optional[List[BookingStatusItems200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingStatusItemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_status_items_200_application_json_object: Optional[BookingStatusItems200ApplicationJSON] = field(default=None)
    
