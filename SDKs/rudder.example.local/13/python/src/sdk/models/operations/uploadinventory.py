from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UploadInventoryRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadInventoryRequestBodySignature:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    signature: str = field(metadata={'multipart_form': { 'field_name': 'signature' }})
    

@dataclass
class UploadInventoryRequestBody:
    file: Optional[UploadInventoryRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    signature: Optional[UploadInventoryRequestBodySignature] = field(default=None, metadata={'multipart_form': { 'file': True }})
    
class UploadInventory200ApplicationJSONActionEnum(str, Enum):
    UPLOAD_INVENTORY = "uploadInventory"

class UploadInventory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UploadInventory200ApplicationJSON:
    action: UploadInventory200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UploadInventory200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UploadInventoryRequest:
    request: Optional[UploadInventoryRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadInventoryResponse:
    content_type: str = field()
    status_code: int = field()
    upload_inventory_200_application_json_object: Optional[UploadInventory200ApplicationJSON] = field(default=None)
    
