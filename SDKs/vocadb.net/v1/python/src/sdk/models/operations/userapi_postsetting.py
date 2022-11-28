from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserAPIPostSettingPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    setting_name: str = field(metadata={'path_param': { 'field_name': 'settingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIPostSettingRequests:
    string: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    string1: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    string2: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    string3: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    string4: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UserAPIPostSettingRequest:
    path_params: UserAPIPostSettingPathParams = field()
    request: UserAPIPostSettingRequests = field()
    

@dataclass
class UserAPIPostSettingResponse:
    content_type: str = field()
    status_code: int = field()
    
