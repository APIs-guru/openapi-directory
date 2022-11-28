from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayCodeRevisionsPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeRevisionsHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeRevisionsRequest:
    headers: GetPayCodeRevisionsHeaders = field()
    path_params: GetPayCodeRevisionsPathParams = field()
    

@dataclass
class GetPayCodeRevisionsResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
