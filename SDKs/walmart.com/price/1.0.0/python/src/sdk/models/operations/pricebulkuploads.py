from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class PriceBulkUploadsFeedTypeEnum(str, Enum):
    PRICE = "price"
    CPT_SELLER_ELIGIBILITY = "CPT_SELLER_ELIGIBILITY"


@dataclass
class PriceBulkUploadsQueryParams:
    feed_type: PriceBulkUploadsFeedTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'feedType', 'style': 'form', 'explode': True }})
    

@dataclass
class PriceBulkUploadsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    wm_consumer_channel_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE' }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID' }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN' }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME' }})
    

@dataclass
class PriceBulkUploadsRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PriceBulkUploadsRequestBody:
    file: Optional[PriceBulkUploadsRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PriceBulkUploadsRequest:
    query_params: PriceBulkUploadsQueryParams = field(default=None)
    headers: PriceBulkUploadsHeaders = field(default=None)
    request: PriceBulkUploadsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class PriceBulkUploads200ApplicationJSON:
    additional_attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAttributes' }})
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedId' }})
    

@dataclass
class PriceBulkUploadsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    price_bulk_uploads_200_application_json_object: Optional[PriceBulkUploads200ApplicationJSON] = field(default=None)
    
