from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared
CREATE_CHALLENGE_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateChallengePathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateChallengeRequestBodyCreateChallengeRequest:
    auth_payload: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AuthPayload' }})
    details_fields: Optional[List[Any]] = field(default=None, metadata={'form': { 'field_name': 'Details.Fields' }})
    details_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Details.Message' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'ExpirationDate' }})
    factor_sid: str = field(default=None, metadata={'form': { 'field_name': 'FactorSid' }})
    hidden_details: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'HiddenDetails' }})
    

@dataclass
class CreateChallengeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChallengeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateChallengePathParams = field(default=None)
    request: Optional[CreateChallengeRequestBodyCreateChallengeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateChallengeSecurity = field(default=None)
    

@dataclass
class CreateChallengeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_entity_challenge: Optional[shared.VerifyV2ServiceEntityChallenge] = field(default=None)
    
