from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UploadInventoryRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadInventoryRequestBodySignature:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    signature: str = field(default=None, metadata={'multipart_form': { 'field_name': 'signature' }})
    

@dataclass
class UploadInventoryRequestBody:
    file: Optional[UploadInventoryRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    signature: Optional[UploadInventoryRequestBodySignature] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadInventoryRequest:
    request: Optional[UploadInventoryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    
class UploadInventory200ApplicationJSONActionEnum(str, Enum):
    UPLOAD_INVENTORY = "uploadInventory"

class UploadInventory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UploadInventory200ApplicationJSON:
    action: UploadInventory200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UploadInventory200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UploadInventoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upload_inventory_200_application_json_object: Optional[UploadInventory200ApplicationJSON] = field(default=None)
    
