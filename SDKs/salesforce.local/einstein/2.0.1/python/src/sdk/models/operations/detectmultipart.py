from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DetectMultipartRequests:
    object_detection_request: Optional[shared.ObjectDetectionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object_detection_request1: Optional[shared.ObjectDetectionRequest] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class DetectMultipartSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DetectMultipartRequest:
    security: DetectMultipartSecurity = field()
    request: Optional[DetectMultipartRequests] = field(default=None)
    

@dataclass
class DetectMultipartResponse:
    content_type: str = field()
    status_code: int = field()
    object_detection_response: Optional[shared.ObjectDetectionResponse] = field(default=None)
    
