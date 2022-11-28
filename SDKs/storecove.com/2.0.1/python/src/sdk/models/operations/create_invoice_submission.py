from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateInvoiceSubmissionRequest:
    request: shared.InvoiceSubmission = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateInvoiceSubmissionResponse:
    content_type: str = field()
    status_code: int = field()
    error_models: Optional[List[Any]] = field(default=None)
    invoice_submission_result: Optional[shared.InvoiceSubmissionResult] = field(default=None)
    
