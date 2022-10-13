from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatorsReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatorsReadRequest:
    path_params: CreatorsReadPathParams = field(default=None)
    

@dataclass
class CreatorsReadResponse:
    content_type: str = field(default=None)
    person_single: Optional[shared.PersonSingle] = field(default=None)
    status_code: int = field(default=None)
    
