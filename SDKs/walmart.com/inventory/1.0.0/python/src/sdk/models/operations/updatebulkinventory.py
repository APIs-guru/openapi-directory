from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateBulkInventoryQueryParams:
    feed_type: str = field(default=None, metadata={'query_param': { 'field_name': 'feedType', 'style': 'form', 'explode': True }})
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateBulkInventoryHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(default=None, metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(default=None, metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(default=None, metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBulkInventoryRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UpdateBulkInventoryRequestBody:
    file: Optional[UpdateBulkInventoryRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UpdateBulkInventoryRequest:
    query_params: UpdateBulkInventoryQueryParams = field(default=None)
    headers: UpdateBulkInventoryHeaders = field(default=None)
    request: UpdateBulkInventoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class UpdateBulkInventory200ApplicationJSON:
    additional_attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalAttributes' }})
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedId' }})
    

@dataclass
class UpdateBulkInventoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_bulk_inventory_200_application_json_object: Optional[UpdateBulkInventory200ApplicationJSON] = field(default=None)
    
