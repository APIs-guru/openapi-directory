from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class AddImageWatermarkV1RequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class AddImageWatermarkV1RequestBodyImage:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image: str = field(default=None, metadata={'multipart_form': { 'field_name': 'image' }})
    

@dataclass
class AddImageWatermarkV1RequestBody:
    file: AddImageWatermarkV1RequestBodyFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    image: AddImageWatermarkV1RequestBodyImage = field(default=None, metadata={'multipart_form': { 'file': True }})
    margin: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'margin' }})
    transparency: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'transparency' }})
    

@dataclass
class AddImageWatermarkV1Request:
    request: AddImageWatermarkV1RequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class AddImageWatermarkV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class AddImageWatermarkV1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    add_image_watermark_v1_200_application_pdf_binary_string: Optional[bytes] = field(default=None)
    add_image_watermark_v1_4_xx_application_problem_plus_json_object: Optional[AddImageWatermarkV14XxApplicationProblemPlusJSON] = field(default=None)
    
