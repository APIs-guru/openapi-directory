from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddTextWatermarkV1RequestBodyColorEnum(str, Enum):
    RED = "Red"
    BLUE = "Blue"
    GRAY = "Gray"
    BLACK = "Black"


@dataclass
class AddTextWatermarkV1RequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class AddTextWatermarkV1RequestBody:
    file: AddTextWatermarkV1RequestBodyFile = field(metadata={'multipart_form': { 'file': True }})
    line_1: str = field(metadata={'multipart_form': { 'field_name': 'line_1' }})
    color: Optional[AddTextWatermarkV1RequestBodyColorEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'color' }})
    line_2: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'line_2' }})
    line_3: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'line_3' }})
    margin: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'margin' }})
    template: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'template' }})
    transparency: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'transparency' }})
    

@dataclass_json
@dataclass
class AddTextWatermarkV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class AddTextWatermarkV1Request:
    request: AddTextWatermarkV1RequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class AddTextWatermarkV1Response:
    content_type: str = field()
    status_code: int = field()
    add_text_watermark_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    add_text_watermark_v1_4_xx_application_problem_plus_json_object: Optional[AddTextWatermarkV14XxApplicationProblemPlusJSON] = field(default=None)
    
