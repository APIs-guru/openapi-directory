from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRenderPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRenderSecurity:
    developer_key: shared.SchemeDeveloperKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRenderRequest:
    path_params: GetRenderPathParams = field()
    security: GetRenderSecurity = field()
    

@dataclass
class GetRenderResponse:
    content_type: str = field()
    status_code: int = field()
    render_response: Optional[shared.RenderResponse] = field(default=None)
    
