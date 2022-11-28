from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_EXECUTION_SERVERS = [
	"https://studio.twilio.com",
]


@dataclass
class UpdateExecutionPathParams:
    flow_sid: str = field(metadata={'path_param': { 'field_name': 'FlowSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateExecutionUpdateExecutionRequest:
    status: shared.ExecutionEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateExecutionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateExecutionRequest:
    path_params: UpdateExecutionPathParams = field()
    security: UpdateExecutionSecurity = field()
    request: Optional[UpdateExecutionUpdateExecutionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    studio_v1_flow_execution: Optional[shared.StudioV1FlowExecution] = field(default=None)
    
