from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCisLineTypeIntoEmployerPathParams:
    cis_line_type_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCisLineTypeIntoEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutCisLineTypeIntoEmployerRequest:
    path_params: PutCisLineTypeIntoEmployerPathParams = field(default=None)
    headers: PutCisLineTypeIntoEmployerHeaders = field(default=None)
    request: shared.CisLineType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutCisLineTypeIntoEmployerResponse:
    cis_line_type: Optional[shared.CisLineType] = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
