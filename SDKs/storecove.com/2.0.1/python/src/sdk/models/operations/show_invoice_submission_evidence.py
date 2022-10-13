from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ShowInvoiceSubmissionEvidencePathParams:
    guid: str = field(default=None, metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowInvoiceSubmissionEvidenceRequest:
    path_params: ShowInvoiceSubmissionEvidencePathParams = field(default=None)
    

@dataclass
class ShowInvoiceSubmissionEvidenceResponse:
    content_type: str = field(default=None)
    invoice_submission_evidence: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
