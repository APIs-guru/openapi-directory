from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePayCodeRevisionByNumberPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayCodeRevisionByNumberHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayCodeRevisionByNumberRequest:
    headers: DeletePayCodeRevisionByNumberHeaders = field()
    path_params: DeletePayCodeRevisionByNumberPathParams = field()
    

@dataclass
class DeletePayCodeRevisionByNumberResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
