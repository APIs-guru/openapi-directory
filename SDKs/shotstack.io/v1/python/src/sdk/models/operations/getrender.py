from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRenderPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRenderSecurity:
    developer_key: shared.SchemeDeveloperKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRenderRequest:
    path_params: GetRenderPathParams = field(default=None)
    security: GetRenderSecurity = field(default=None)
    

@dataclass
class GetRenderResponse:
    content_type: str = field(default=None)
    render_response: Optional[shared.RenderResponse] = field(default=None)
    status_code: int = field(default=None)
    
