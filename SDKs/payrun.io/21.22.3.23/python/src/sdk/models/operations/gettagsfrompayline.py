from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsFromPayLinePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromPayLineHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetTagsFromPayLineRequest:
    path_params: GetTagsFromPayLinePathParams = field(default=None)
    headers: GetTagsFromPayLineHeaders = field(default=None)
    

@dataclass
class GetTagsFromPayLineResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
