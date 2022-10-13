from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIMembersIDPortraitPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDPortraitQueryParams:
    crop_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'cropType', 'style': 'form', 'explode': True }})
    web_version: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'webVersion', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIMembersIDPortraitRequest:
    path_params: GetAPIMembersIDPortraitPathParams = field(default=None)
    query_params: GetAPIMembersIDPortraitQueryParams = field(default=None)
    

@dataclass
class GetAPIMembersIDPortraitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
