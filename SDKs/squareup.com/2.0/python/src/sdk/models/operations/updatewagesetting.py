from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateWageSettingPathParams:
    team_member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'team_member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWageSettingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateWageSettingRequest:
    path_params: UpdateWageSettingPathParams = field(default=None)
    request: shared.UpdateWageSettingRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateWageSettingSecurity = field(default=None)
    

@dataclass
class UpdateWageSettingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_wage_setting_response: Optional[shared.UpdateWageSettingResponse] = field(default=None)
    
