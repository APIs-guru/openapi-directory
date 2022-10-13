from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateInvoiceSubmissionRequest:
    request: shared.InvoiceSubmission = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInvoiceSubmissionResponse:
    content_type: str = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    invoice_submission_result: Optional[shared.InvoiceSubmissionResult] = field(default=None)
    status_code: int = field(default=None)
    
