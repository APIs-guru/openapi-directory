from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListDisputeEvidencePathParams:
    dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDisputeEvidenceQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    

@dataclass
class ListDisputeEvidenceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListDisputeEvidenceRequest:
    path_params: ListDisputeEvidencePathParams = field(default=None)
    query_params: ListDisputeEvidenceQueryParams = field(default=None)
    security: ListDisputeEvidenceSecurity = field(default=None)
    

@dataclass
class ListDisputeEvidenceResponse:
    content_type: str = field(default=None)
    list_dispute_evidence_response: Optional[shared.ListDisputeEvidenceResponse] = field(default=None)
    status_code: int = field(default=None)
    
