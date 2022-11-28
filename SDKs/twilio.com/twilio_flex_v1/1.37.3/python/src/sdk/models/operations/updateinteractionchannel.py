from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


UPDATE_INTERACTION_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateInteractionChannelPathParams:
    interaction_sid: str = field(metadata={'path_param': { 'field_name': 'InteractionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInteractionChannelUpdateInteractionChannelRequest:
    status: shared.InteractionChannelEnumStatusEnum = field(metadata={'form': { 'field_name': 'Status' }})
    routing: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Routing' }})
    

@dataclass
class UpdateInteractionChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateInteractionChannelRequest:
    path_params: UpdateInteractionChannelPathParams = field()
    security: UpdateInteractionChannelSecurity = field()
    request: Optional[UpdateInteractionChannelUpdateInteractionChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateInteractionChannelResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_interaction_interaction_channel: Optional[shared.FlexV1InteractionInteractionChannel] = field(default=None)
    
