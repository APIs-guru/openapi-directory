from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOneApplicationPathParams:
    application_id: str = field(metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOneApplicationRequest:
    path_params: GetOneApplicationPathParams = field()
    

@dataclass
class GetOneApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
