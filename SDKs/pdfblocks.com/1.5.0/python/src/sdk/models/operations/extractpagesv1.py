from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class ExtractPagesV1RequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class ExtractPagesV1RequestBody:
    file: ExtractPagesV1RequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    first_page: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'first_page' }})
    last_page: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'last_page' }})
    

@dataclass
class ExtractPagesV1Request:
    request: ExtractPagesV1RequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class ExtractPagesV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ExtractPagesV1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    extract_pages_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    extract_pages_v1_4_xx_application_problem_plus_json_object: Optional[ExtractPagesV14XxApplicationProblemPlusJSON] = field(default=None)
    
