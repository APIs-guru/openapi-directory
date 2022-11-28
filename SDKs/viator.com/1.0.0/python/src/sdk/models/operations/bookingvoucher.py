from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


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
    accept_language: str = field(metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BookingVoucher200ApplicationJSON:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
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
class BookingVoucherRequest:
    headers: BookingVoucherHeaders = field()
    query_params: BookingVoucherQueryParams = field()
    

@dataclass
class BookingVoucherResponse:
    content_type: str = field()
    status_code: int = field()
    booking_voucher_200_application_json_object: Optional[BookingVoucher200ApplicationJSON] = field(default=None)
    
