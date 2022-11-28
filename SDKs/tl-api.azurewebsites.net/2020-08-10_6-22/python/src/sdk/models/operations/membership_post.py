from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MembershipPostRequest:
    request: shared.MemberDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MembershipPostResponse:
    content_type: str = field()
    status_code: int = field()
    membership_post_200_application_json_boolean: Optional[bool] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    
