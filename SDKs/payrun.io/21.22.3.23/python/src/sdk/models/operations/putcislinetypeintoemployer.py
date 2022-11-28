from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCisLineTypeIntoEmployerPathParams:
    cis_line_type_id: str = field(metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCisLineTypeIntoEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCisLineTypeIntoEmployerRequest:
    headers: PutCisLineTypeIntoEmployerHeaders = field()
    path_params: PutCisLineTypeIntoEmployerPathParams = field()
    request: shared.CisLineType = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCisLineTypeIntoEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    cis_line_type: Optional[shared.CisLineType] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
