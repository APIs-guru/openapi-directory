from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCisLineTypeTagPathParams:
    cis_line_type_id: str = field(metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCisLineTypeTagHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCisLineTypeTagRequest:
    headers: PutCisLineTypeTagHeaders = field()
    path_params: PutCisLineTypeTagPathParams = field()
    

@dataclass
class PutCisLineTypeTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
