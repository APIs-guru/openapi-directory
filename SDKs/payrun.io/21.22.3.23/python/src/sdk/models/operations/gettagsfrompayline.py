from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsFromPayLinePathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_line_id: str = field(metadata={'path_param': { 'field_name': 'PayLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromPayLineHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromPayLineRequest:
    headers: GetTagsFromPayLineHeaders = field()
    path_params: GetTagsFromPayLinePathParams = field()
    

@dataclass
class GetTagsFromPayLineResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
