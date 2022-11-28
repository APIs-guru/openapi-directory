from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PriceBulkUploadsFeedTypeEnum(str, Enum):
    PRICE = "price"
    CPT_SELLER_ELIGIBILITY = "CPT_SELLER_ELIGIBILITY"


@dataclass
class PriceBulkUploadsQueryParams:
    feed_type: PriceBulkUploadsFeedTypeEnum = field(metadata={'query_param': { 'field_name': 'feedType', 'style': 'form', 'explode': True }})
    

@dataclass
class PriceBulkUploadsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    

@dataclass
class PriceBulkUploadsRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PriceBulkUploadsRequestBody:
    file: Optional[PriceBulkUploadsRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclass
class PriceBulkUploads200ApplicationJSON:
    additional_attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAttributes') }})
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedId') }})
    

@dataclass
class PriceBulkUploadsRequest:
    headers: PriceBulkUploadsHeaders = field()
    query_params: PriceBulkUploadsQueryParams = field()
    request: PriceBulkUploadsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PriceBulkUploadsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    price_bulk_uploads_200_application_json_object: Optional[PriceBulkUploads200ApplicationJSON] = field(default=None)
    
