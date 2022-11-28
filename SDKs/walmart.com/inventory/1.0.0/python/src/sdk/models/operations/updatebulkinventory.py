from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateBulkInventoryQueryParams:
    feed_type: str = field(metadata={'query_param': { 'field_name': 'feedType', 'style': 'form', 'explode': True }})
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateBulkInventoryHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBulkInventoryRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UpdateBulkInventoryRequestBody:
    file: Optional[UpdateBulkInventoryRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclass
class UpdateBulkInventory200ApplicationJSON:
    additional_attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalAttributes') }})
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedId') }})
    

@dataclass
class UpdateBulkInventoryRequest:
    headers: UpdateBulkInventoryHeaders = field()
    query_params: UpdateBulkInventoryQueryParams = field()
    request: UpdateBulkInventoryRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UpdateBulkInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    update_bulk_inventory_200_application_json_object: Optional[UpdateBulkInventory200ApplicationJSON] = field(default=None)
    
