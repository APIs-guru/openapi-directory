from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PredictMultipartRequests:
    image_classification_request: Optional[shared.ImageClassificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    image_classification_request1: Optional[shared.ImageClassificationRequest] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PredictMultipartSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PredictMultipartRequest:
    request: Optional[PredictMultipartRequests] = field(default=None)
    security: PredictMultipartSecurity = field(default=None)
    

@dataclass
class PredictMultipartResponse:
    content_type: str = field(default=None)
    image_classification_response: Optional[shared.ImageClassificationResponse] = field(default=None)
    status_code: int = field(default=None)
    
