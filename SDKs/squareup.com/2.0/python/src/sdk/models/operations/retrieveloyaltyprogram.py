from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveLoyaltyProgramPathParams:
    program_id: str = field(default=None, metadata={'path_param': { 'field_name': 'program_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveLoyaltyProgramSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveLoyaltyProgramRequest:
    path_params: RetrieveLoyaltyProgramPathParams = field(default=None)
    security: RetrieveLoyaltyProgramSecurity = field(default=None)
    

@dataclass
class RetrieveLoyaltyProgramResponse:
    content_type: str = field(default=None)
    retrieve_loyalty_program_response: Optional[shared.RetrieveLoyaltyProgramResponse] = field(default=None)
    status_code: int = field(default=None)
    
