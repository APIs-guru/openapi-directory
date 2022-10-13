from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateDocumentSubmissionRequest:
    request: shared.DocumentSubmission = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDocumentSubmissionResponse:
    content_type: str = field(default=None)
    document_submission_result: Optional[shared.DocumentSubmissionResult] = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
