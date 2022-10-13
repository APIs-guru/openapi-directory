from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchDpsMessagePathParams:
    dps_message_id: str = field(default=None, metadata={'path_param': { 'field_name': 'DpsMessageId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchDpsMessageHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PatchDpsMessageRequest:
    path_params: PatchDpsMessagePathParams = field(default=None)
    headers: PatchDpsMessageHeaders = field(default=None)
    

@dataclass
class PatchDpsMessageResponse:
    content_type: str = field(default=None)
    dps_message: Optional[shared.DpsMessage] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
