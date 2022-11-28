from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisLineTypeFromEmployerPathParams:
    cis_line_type_id: str = field(metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineTypeFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineTypeFromEmployerRequest:
    headers: GetCisLineTypeFromEmployerHeaders = field()
    path_params: GetCisLineTypeFromEmployerPathParams = field()
    

@dataclass
class GetCisLineTypeFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    cis_line_type: Optional[shared.CisLineType] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
