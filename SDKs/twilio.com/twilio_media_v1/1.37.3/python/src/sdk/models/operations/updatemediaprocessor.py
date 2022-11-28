from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class UpdateMediaProcessorPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMediaProcessorUpdateMediaProcessorRequest:
    status: shared.MediaProcessorEnumUpdateStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMediaProcessorRequest:
    path_params: UpdateMediaProcessorPathParams = field()
    security: UpdateMediaProcessorSecurity = field()
    request: Optional[UpdateMediaProcessorUpdateMediaProcessorRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMediaProcessorResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_media_processor: Optional[shared.MediaV1MediaProcessor] = field(default=None)
    
