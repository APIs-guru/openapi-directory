from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowSourcePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowSourceRequest:
    path_params: ShowSourcePathParams = field(default=None)
    

@dataclass
class ShowSourceResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    source: Optional[shared.Source] = field(default=None)
    status_code: int = field(default=None)
    
