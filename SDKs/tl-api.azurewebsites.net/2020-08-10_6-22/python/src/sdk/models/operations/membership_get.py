from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MembershipGetSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MembershipGetRequest:
    security: MembershipGetSecurity = field()
    

@dataclass
class MembershipGetResponse:
    content_type: str = field()
    status_code: int = field()
    member_dtos: Optional[List[shared.MemberDto]] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
