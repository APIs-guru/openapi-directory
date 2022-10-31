from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisLineTypeFromEmployerPathParams:
    cis_line_type_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineTypeFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineTypeFromEmployerRequest:
    path_params: GetCisLineTypeFromEmployerPathParams = field(default=None)
    headers: GetCisLineTypeFromEmployerHeaders = field(default=None)
    

@dataclass
class GetCisLineTypeFromEmployerResponse:
    cis_line_type: Optional[shared.CisLineType] = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
