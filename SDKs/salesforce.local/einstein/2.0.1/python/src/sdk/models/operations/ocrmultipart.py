from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OcrMultipartRequestBodySampleContent:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    sample_content: str = field(metadata={'multipart_form': { 'field_name': 'sampleContent' }})
    

@dataclass
class OcrMultipartRequestBody:
    model_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    sample_content: Optional[OcrMultipartRequestBodySampleContent] = field(default=None, metadata={'multipart_form': { 'file': True }})
    sample_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'sampleId' }})
    sample_location: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'sampleLocation' }})
    task: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'task' }})
    

@dataclass
class OcrMultipartSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class OcrMultipartRequest:
    security: OcrMultipartSecurity = field()
    request: Optional[OcrMultipartRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class OcrMultipartResponse:
    content_type: str = field()
    status_code: int = field()
    ocr_predict_response: Optional[shared.OcrPredictResponse] = field(default=None)
    
