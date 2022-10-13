from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MembershipPostRequest:
    request: shared.MemberDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MembershipPostResponse:
    content_type: str = field(default=None)
    membership_post_200_application_json_boolean: Optional[bool] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
