from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StatusQueryParams:
    msg_id: str = field(metadata={'query_param': { 'field_name': 'msg_id', 'style': 'form', 'explode': True }})
    

@dataclass
class StatusRequest:
    query_params: StatusQueryParams = field()
    

@dataclass
class StatusResponse:
    content_type: str = field()
    status_code: int = field()
    status_200_text_plain_string: Optional[str] = field(default=None)
    
