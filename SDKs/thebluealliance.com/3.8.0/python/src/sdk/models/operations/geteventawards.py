from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEventAwardsPathParams:
    event_key: str = field(default=None, metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventAwardsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventAwardsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetEventAwardsRequest:
    path_params: GetEventAwardsPathParams = field(default=None)
    headers: GetEventAwardsHeaders = field(default=None)
    security: GetEventAwardsSecurity = field(default=None)
    

@dataclass
class GetEventAwardsResponse:
    awards: Optional[List[shared.Award]] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
