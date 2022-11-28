from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RotatePagesV1RequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class RotatePagesV1RequestBody:
    angle: int = field(metadata={'multipart_form': { 'field_name': 'angle' }})
    file: RotatePagesV1RequestBodyFile = field(metadata={'multipart_form': { 'file': True }})
    first_page: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'first_page' }})
    last_page: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'last_page' }})
    

@dataclass_json
@dataclass
class RotatePagesV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class RotatePagesV1Request:
    request: RotatePagesV1RequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class RotatePagesV1Response:
    content_type: str = field()
    status_code: int = field()
    rotate_pages_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    rotate_pages_v1_4_xx_application_problem_plus_json_object: Optional[RotatePagesV14XxApplicationProblemPlusJSON] = field(default=None)
    
