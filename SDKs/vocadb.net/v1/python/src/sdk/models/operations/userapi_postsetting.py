from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserAPIPostSettingPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    setting_name: str = field(default=None, metadata={'path_param': { 'field_name': 'settingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIPostSettingRequests:
    string: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    string1: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    string2: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    string3: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    string4: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UserAPIPostSettingRequest:
    path_params: UserAPIPostSettingPathParams = field(default=None)
    request: UserAPIPostSettingRequests = field(default=None)
    

@dataclass
class UserAPIPostSettingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
