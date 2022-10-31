from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class BookingHotelsQueryParams:
    dest_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'destId', 'style': 'form', 'explode': True }})
    product_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'productCode', 'style': 'form', 'explode': True }})
    

@dataclass
class BookingHotelsHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class BookingHotelsRequest:
    query_params: BookingHotelsQueryParams = field(default=None)
    headers: BookingHotelsHeaders = field(default=None)
    

@dataclass_json
@dataclass
class BookingHotels200ApplicationJSONData:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    destination_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationId' }})
    hotel_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotelString' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    product_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCodes' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    

@dataclass_json
@dataclass
class BookingHotels200ApplicationJSON:
    data: Optional[List[BookingHotels200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingHotelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_hotels_200_application_json_object: Optional[BookingHotels200ApplicationJSON] = field(default=None)
    
