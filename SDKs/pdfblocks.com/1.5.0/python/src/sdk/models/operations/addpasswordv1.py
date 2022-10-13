from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class AddPasswordV1RequestBodyEncryptionAlgorithmEnum(str, Enum):
    AES_128 = "AES-128"
    AES_256 = "AES-256"


@dataclass
class AddPasswordV1RequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class AddPasswordV1RequestBody:
    encryption_algorithm: Optional[AddPasswordV1RequestBodyEncryptionAlgorithmEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'encryption_algorithm' }})
    file: AddPasswordV1RequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    password: str = field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    

@dataclass
class AddPasswordV1Request:
    request: AddPasswordV1RequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class AddPasswordV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class AddPasswordV1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    add_password_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    add_password_v1_4_xx_application_problem_plus_json_object: Optional[AddPasswordV14XxApplicationProblemPlusJSON] = field(default=None)
    
