from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllPayRunTagsPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_schedule_id: str = field(metadata={'path_param': { 'field_name': 'PayScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllPayRunTagsHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllPayRunTagsRequest:
    headers: GetAllPayRunTagsHeaders = field()
    path_params: GetAllPayRunTagsPathParams = field()
    

@dataclass
class GetAllPayRunTagsResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
