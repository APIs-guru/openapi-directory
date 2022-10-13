from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ResumeSubscriptionPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumeSubscriptionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResumeSubscriptionRequest:
    path_params: ResumeSubscriptionPathParams = field(default=None)
    security: ResumeSubscriptionSecurity = field(default=None)
    

@dataclass
class ResumeSubscriptionResponse:
    content_type: str = field(default=None)
    resume_subscription_response: Optional[shared.ResumeSubscriptionResponse] = field(default=None)
    status_code: int = field(default=None)
    
