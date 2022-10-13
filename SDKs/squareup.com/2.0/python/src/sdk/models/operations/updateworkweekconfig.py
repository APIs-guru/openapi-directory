from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateWorkweekConfigPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkweekConfigSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateWorkweekConfigRequest:
    path_params: UpdateWorkweekConfigPathParams = field(default=None)
    request: shared.UpdateWorkweekConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateWorkweekConfigSecurity = field(default=None)
    

@dataclass
class UpdateWorkweekConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_workweek_config_response: Optional[shared.UpdateWorkweekConfigResponse] = field(default=None)
    
