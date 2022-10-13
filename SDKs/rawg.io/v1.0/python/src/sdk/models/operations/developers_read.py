from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DevelopersReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DevelopersReadRequest:
    path_params: DevelopersReadPathParams = field(default=None)
    

@dataclass
class DevelopersReadResponse:
    content_type: str = field(default=None)
    developer_single: Optional[shared.DeveloperSingle] = field(default=None)
    status_code: int = field(default=None)
    
