from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StatusGetQueryParams:
    message_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'messageId', 'style': 'form', 'explode': True }})
    

@dataclass
class StatusGetRequest:
    query_params: StatusGetQueryParams = field(default=None)
    

@dataclass
class StatusGetResponse:
    content_type: str = field(default=None)
    message_status: Optional[shared.MessageStatus] = field(default=None)
    problem_details: Optional[shared.ProblemDetails] = field(default=None)
    status_code: int = field(default=None)
    
