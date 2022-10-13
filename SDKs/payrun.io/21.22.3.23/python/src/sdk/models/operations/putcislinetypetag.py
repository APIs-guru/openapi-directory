from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCisLineTypeTagPathParams:
    cis_line_type_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCisLineTypeTagHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutCisLineTypeTagRequest:
    path_params: PutCisLineTypeTagPathParams = field(default=None)
    headers: PutCisLineTypeTagHeaders = field(default=None)
    

@dataclass
class PutCisLineTypeTagResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
