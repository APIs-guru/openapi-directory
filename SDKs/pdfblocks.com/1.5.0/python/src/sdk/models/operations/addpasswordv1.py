from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddPasswordV1RequestBodyEncryptionAlgorithmEnum(str, Enum):
    AES_128 = "AES-128"
    AES_256 = "AES-256"


@dataclass
class AddPasswordV1RequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class AddPasswordV1RequestBody:
    file: AddPasswordV1RequestBodyFile = field(metadata={'multipart_form': { 'file': True }})
    password: str = field(metadata={'multipart_form': { 'field_name': 'password' }})
    encryption_algorithm: Optional[AddPasswordV1RequestBodyEncryptionAlgorithmEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'encryption_algorithm' }})
    

@dataclass_json
@dataclass
class AddPasswordV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class AddPasswordV1Request:
    request: AddPasswordV1RequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class AddPasswordV1Response:
    content_type: str = field()
    status_code: int = field()
    add_password_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    add_password_v1_4_xx_application_problem_plus_json_object: Optional[AddPasswordV14XxApplicationProblemPlusJSON] = field(default=None)
    
