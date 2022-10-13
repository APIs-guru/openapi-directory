from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubmitEvidencePathParams:
    dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubmitEvidenceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SubmitEvidenceRequest:
    path_params: SubmitEvidencePathParams = field(default=None)
    security: SubmitEvidenceSecurity = field(default=None)
    

@dataclass
class SubmitEvidenceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    submit_evidence_response: Optional[shared.SubmitEvidenceResponse] = field(default=None)
    
