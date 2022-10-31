from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPaySchedulePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPayScheduleHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPayScheduleRequest:
    path_params: PostPaySchedulePathParams = field(default=None)
    headers: PostPayScheduleHeaders = field(default=None)
    request: shared.PaySchedule = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPayScheduleResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    
