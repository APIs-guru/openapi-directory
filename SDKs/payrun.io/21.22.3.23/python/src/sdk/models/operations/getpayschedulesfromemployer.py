from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaySchedulesFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaySchedulesFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaySchedulesFromEmployerRequest:
    path_params: GetPaySchedulesFromEmployerPathParams = field(default=None)
    headers: GetPaySchedulesFromEmployerHeaders = field(default=None)
    

@dataclass
class GetPaySchedulesFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
