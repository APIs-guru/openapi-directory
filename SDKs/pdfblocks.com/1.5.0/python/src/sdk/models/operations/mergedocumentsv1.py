from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class MergeDocumentsV1RequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class MergeDocumentsV1RequestBody:
    file: Optional[List[MergeDocumentsV1RequestBodyFile]] = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass_json
@dataclass
class MergeDocumentsV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class MergeDocumentsV1Request:
    request: MergeDocumentsV1RequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class MergeDocumentsV1Response:
    content_type: str = field()
    status_code: int = field()
    merge_documents_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    merge_documents_v1_4_xx_application_problem_plus_json_object: Optional[MergeDocumentsV14XxApplicationProblemPlusJSON] = field(default=None)
    
