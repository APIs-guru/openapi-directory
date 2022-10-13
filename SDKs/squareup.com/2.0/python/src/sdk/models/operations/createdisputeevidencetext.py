from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateDisputeEvidenceTextPathParams:
    dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDisputeEvidenceTextSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateDisputeEvidenceTextRequest:
    path_params: CreateDisputeEvidenceTextPathParams = field(default=None)
    request: shared.CreateDisputeEvidenceTextRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateDisputeEvidenceTextSecurity = field(default=None)
    

@dataclass
class CreateDisputeEvidenceTextResponse:
    content_type: str = field(default=None)
    create_dispute_evidence_text_response: Optional[shared.CreateDisputeEvidenceTextResponse] = field(default=None)
    status_code: int = field(default=None)
    
