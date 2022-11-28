from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatorsReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatorsReadRequest:
    path_params: CreatorsReadPathParams = field()
    

@dataclass
class CreatorsReadResponse:
    content_type: str = field()
    status_code: int = field()
    person_single: Optional[shared.PersonSingle] = field(default=None)
    
