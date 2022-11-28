from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DevelopersReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DevelopersReadRequest:
    path_params: DevelopersReadPathParams = field()
    

@dataclass
class DevelopersReadResponse:
    content_type: str = field()
    status_code: int = field()
    developer_single: Optional[shared.DeveloperSingle] = field(default=None)
    
