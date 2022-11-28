from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDpsMessageFromEmployerPathParams:
    dps_message_id: str = field(metadata={'path_param': { 'field_name': 'DpsMessageId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDpsMessageFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDpsMessageFromEmployerRequest:
    headers: GetDpsMessageFromEmployerHeaders = field()
    path_params: GetDpsMessageFromEmployerPathParams = field()
    

@dataclass
class GetDpsMessageFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    dps_message: Optional[shared.DpsMessage] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
