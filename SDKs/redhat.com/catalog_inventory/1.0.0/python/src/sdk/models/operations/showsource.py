from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowSourcePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowSourceRequest:
    path_params: ShowSourcePathParams = field()
    

@dataclass
class ShowSourceResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    source: Optional[shared.Source] = field(default=None)
    
