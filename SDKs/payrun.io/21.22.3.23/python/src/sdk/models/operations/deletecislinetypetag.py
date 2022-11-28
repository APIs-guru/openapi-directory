from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCisLineTypeTagPathParams:
    cis_line_type_id: str = field(metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCisLineTypeTagHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCisLineTypeTagRequest:
    headers: DeleteCisLineTypeTagHeaders = field()
    path_params: DeleteCisLineTypeTagPathParams = field()
    

@dataclass
class DeleteCisLineTypeTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
