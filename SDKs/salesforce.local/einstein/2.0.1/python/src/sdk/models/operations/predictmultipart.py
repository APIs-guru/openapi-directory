from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictMultipartRequests:
    image_classification_request: Optional[shared.ImageClassificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_classification_request1: Optional[shared.ImageClassificationRequest] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PredictMultipartSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PredictMultipartRequest:
    security: PredictMultipartSecurity = field()
    request: Optional[PredictMultipartRequests] = field(default=None)
    

@dataclass
class PredictMultipartResponse:
    content_type: str = field()
    status_code: int = field()
    image_classification_response: Optional[shared.ImageClassificationResponse] = field(default=None)
    
