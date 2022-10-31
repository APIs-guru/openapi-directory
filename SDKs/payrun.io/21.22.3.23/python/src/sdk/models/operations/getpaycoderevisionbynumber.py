from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayCodeRevisionByNumberPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(default=None, metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeRevisionByNumberHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeRevisionByNumberRequest:
    path_params: GetPayCodeRevisionByNumberPathParams = field(default=None)
    headers: GetPayCodeRevisionByNumberHeaders = field(default=None)
    

@dataclass
class GetPayCodeRevisionByNumberResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_code: Optional[shared.PayCode] = field(default=None)
    status_code: int = field(default=None)
    
