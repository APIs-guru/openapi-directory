from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveSettlementPathParams:
    location_id: str = field(default=None, metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    settlement_id: str = field(default=None, metadata={'path_param': { 'field_name': 'settlement_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSettlementSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveSettlementRequest:
    path_params: RetrieveSettlementPathParams = field(default=None)
    security: RetrieveSettlementSecurity = field(default=None)
    

@dataclass
class RetrieveSettlementResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v1_settlement: Optional[shared.V1Settlement] = field(default=None)
    
