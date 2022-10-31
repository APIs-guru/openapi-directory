from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class MerchantCancellationHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class MerchantCancellationRequestBodyCancelItems:
    cancel_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelCode' }})
    cancel_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelDescription' }})
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRef' }})
    item_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    

@dataclass_json
@dataclass
class MerchantCancellationRequestBody:
    cancel_items: Optional[List[MerchantCancellationRequestBodyCancelItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelItems' }})
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRef' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    

@dataclass
class MerchantCancellationRequest:
    headers: MerchantCancellationHeaders = field(default=None)
    request: Optional[MerchantCancellationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class MerchantCancellation200ApplicationJSONDataCancelItems:
    cancellation_response_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationResponseDescription' }})
    cancellation_response_status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationResponseStatusCode' }})
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRef' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    

@dataclass_json
@dataclass
class MerchantCancellation200ApplicationJSONData:
    cancel_items: Optional[List[MerchantCancellation200ApplicationJSONDataCancelItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelItems' }})
    distributor_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorRef' }})
    itinerary_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itineraryId' }})
    

@dataclass_json
@dataclass
class MerchantCancellation200ApplicationJSON:
    data: Optional[MerchantCancellation200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
    

@dataclass_json
@dataclass
class MerchantCancellation400ApplicationJSONData:
    cancellation_response_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationResponseDescription' }})
    cancellation_response_status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationResponseStatusCode' }})
    distributor_item_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributorItemRef' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    

@dataclass_json
@dataclass
class MerchantCancellation400ApplicationJSON:
    data: Optional[MerchantCancellation400ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class MerchantCancellationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    merchant_cancellation_200_application_json_object: Optional[MerchantCancellation200ApplicationJSON] = field(default=None)
    merchant_cancellation_400_application_json_object: Optional[MerchantCancellation400ApplicationJSON] = field(default=None)
    
