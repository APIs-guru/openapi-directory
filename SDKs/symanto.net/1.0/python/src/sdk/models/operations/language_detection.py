from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LanguageDetectionRequest:
    request: Optional[List[shared.LanguageDetection]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LanguageDetectionResponse:
    content_type: str = field(default=None)
    language_detection_response: Optional[List[shared.LanguagePredicted]] = field(default=None)
    status_code: int = field(default=None)
    validation_errors: Optional[shared.ValidationErrors] = field(default=None)
    
