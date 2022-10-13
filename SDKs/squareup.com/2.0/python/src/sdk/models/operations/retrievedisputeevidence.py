from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveDisputeEvidencePathParams:
    dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dispute_id', 'style': 'simple', 'explode': False }})
    evidence_id: str = field(default=None, metadata={'path_param': { 'field_name': 'evidence_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveDisputeEvidenceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveDisputeEvidenceRequest:
    path_params: RetrieveDisputeEvidencePathParams = field(default=None)
    security: RetrieveDisputeEvidenceSecurity = field(default=None)
    

@dataclass
class RetrieveDisputeEvidenceResponse:
    content_type: str = field(default=None)
    retrieve_dispute_evidence_response: Optional[shared.RetrieveDisputeEvidenceResponse] = field(default=None)
    status_code: int = field(default=None)
    
