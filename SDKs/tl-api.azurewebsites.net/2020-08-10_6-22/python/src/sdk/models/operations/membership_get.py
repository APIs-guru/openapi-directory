from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MembershipGetSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MembershipGetRequest:
    security: MembershipGetSecurity = field(default=None)
    

@dataclass
class MembershipGetResponse:
    content_type: str = field(default=None)
    member_dtos: Optional[List[shared.MemberDto]] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
