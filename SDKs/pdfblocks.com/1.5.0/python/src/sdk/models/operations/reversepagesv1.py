from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class ReversePagesV1RequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class ReversePagesV1RequestBody:
    file: ReversePagesV1RequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class ReversePagesV1Request:
    request: ReversePagesV1RequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class ReversePagesV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ReversePagesV1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reverse_pages_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    reverse_pages_v1_4_xx_application_problem_plus_json_object: Optional[ReversePagesV14XxApplicationProblemPlusJSON] = field(default=None)
    
