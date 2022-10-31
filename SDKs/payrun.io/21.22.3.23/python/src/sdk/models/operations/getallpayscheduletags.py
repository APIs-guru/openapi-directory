from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllPayScheduleTagsPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllPayScheduleTagsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllPayScheduleTagsRequest:
    path_params: GetAllPayScheduleTagsPathParams = field(default=None)
    headers: GetAllPayScheduleTagsHeaders = field(default=None)
    

@dataclass
class GetAllPayScheduleTagsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
