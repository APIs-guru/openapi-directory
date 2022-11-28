from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagsFromCisLineTypePathParams:
    cis_line_type_id: str = field(metadata={'path_param': { 'field_name': 'CisLineTypeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromCisLineTypeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsFromCisLineTypeRequest:
    headers: GetTagsFromCisLineTypeHeaders = field()
    path_params: GetTagsFromCisLineTypePathParams = field()
    

@dataclass
class GetTagsFromCisLineTypeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
