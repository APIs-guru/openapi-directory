from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveWageSettingPathParams:
    team_member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'team_member_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveWageSettingSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveWageSettingRequest:
    path_params: RetrieveWageSettingPathParams = field(default=None)
    security: RetrieveWageSettingSecurity = field(default=None)
    

@dataclass
class RetrieveWageSettingResponse:
    content_type: str = field(default=None)
    retrieve_wage_setting_response: Optional[shared.RetrieveWageSettingResponse] = field(default=None)
    status_code: int = field(default=None)
    
