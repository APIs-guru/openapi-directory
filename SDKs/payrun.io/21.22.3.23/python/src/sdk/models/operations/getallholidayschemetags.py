from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAllHolidaySchemeTagsPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllHolidaySchemeTagsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllHolidaySchemeTagsRequest:
    path_params: GetAllHolidaySchemeTagsPathParams = field(default=None)
    headers: GetAllHolidaySchemeTagsHeaders = field(default=None)
    

@dataclass
class GetAllHolidaySchemeTagsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
