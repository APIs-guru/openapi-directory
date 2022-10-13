from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayInstructionsWithTagPathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayInstructionsWithTagHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetPayInstructionsWithTagRequest:
    path_params: GetPayInstructionsWithTagPathParams = field(default=None)
    headers: GetPayInstructionsWithTagHeaders = field(default=None)
    

@dataclass
class GetPayInstructionsWithTagResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
