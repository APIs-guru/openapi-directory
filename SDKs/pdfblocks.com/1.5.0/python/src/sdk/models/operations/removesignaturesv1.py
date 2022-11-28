from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class RemoveSignaturesV1RequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class RemoveSignaturesV1RequestBody:
    file: RemoveSignaturesV1RequestBodyFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclass
class RemoveSignaturesV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class RemoveSignaturesV1Request:
    request: RemoveSignaturesV1RequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class RemoveSignaturesV1Response:
    content_type: str = field()
    status_code: int = field()
    remove_signatures_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    remove_signatures_v1_4_xx_application_problem_plus_json_object: Optional[RemoveSignaturesV14XxApplicationProblemPlusJSON] = field(default=None)
    
