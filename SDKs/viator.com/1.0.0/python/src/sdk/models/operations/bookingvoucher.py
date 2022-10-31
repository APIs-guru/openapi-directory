from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class BookingVoucherQueryParams:
    embedded_resources: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'embeddedResources', 'style': 'form', 'explode': True }})
    full_html: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fullHTML', 'style': 'form', 'explode': True }})
    item_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'itemId', 'style': 'form', 'explode': True }})
    lead_last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'leadLastName', 'style': 'form', 'explode': True }})
    mobile_voucher: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'mobileVoucher', 'style': 'form', 'explode': True }})
    voucher_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'voucherKey', 'style': 'form', 'explode': True }})
    

@dataclass
class BookingVoucherHeaders:
    accept_language: str = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class BookingVoucherRequest:
    query_params: BookingVoucherQueryParams = field(default=None)
    headers: BookingVoucherHeaders = field(default=None)
    

@dataclass_json
@dataclass
class BookingVoucher200ApplicationJSON:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
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
class BookingVoucherResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    booking_voucher_200_application_json_object: Optional[BookingVoucher200ApplicationJSON] = field(default=None)
    
