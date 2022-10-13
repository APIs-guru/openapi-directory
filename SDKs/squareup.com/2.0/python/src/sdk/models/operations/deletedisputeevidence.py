from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDisputeEvidencePathParams:
    dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dispute_id', 'style': 'simple', 'explode': False }})
    evidence_id: str = field(default=None, metadata={'path_param': { 'field_name': 'evidence_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDisputeEvidenceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteDisputeEvidenceRequest:
    path_params: DeleteDisputeEvidencePathParams = field(default=None)
    security: DeleteDisputeEvidenceSecurity = field(default=None)
    

@dataclass
class DeleteDisputeEvidenceResponse:
    content_type: str = field(default=None)
    delete_dispute_evidence_response: Optional[shared.DeleteDisputeEvidenceResponse] = field(default=None)
    status_code: int = field(default=None)
    
