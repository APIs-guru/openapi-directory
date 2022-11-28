from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ShowInvoiceSubmissionEvidencePathParams:
    guid: str = field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowInvoiceSubmissionEvidenceRequest:
    path_params: ShowInvoiceSubmissionEvidencePathParams = field()
    

@dataclass
class ShowInvoiceSubmissionEvidenceResponse:
    content_type: str = field()
    status_code: int = field()
    invoice_submission_evidence: Optional[Any] = field(default=None)
    
