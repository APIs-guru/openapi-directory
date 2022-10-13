from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisLineTypesFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineTypesFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetCisLineTypesFromEmployerRequest:
    path_params: GetCisLineTypesFromEmployerPathParams = field(default=None)
    headers: GetCisLineTypesFromEmployerHeaders = field(default=None)
    

@dataclass
class GetCisLineTypesFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
