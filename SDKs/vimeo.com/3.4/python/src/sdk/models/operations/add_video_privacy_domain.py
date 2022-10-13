from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideoPrivacyDomainPathParams:
    domain: str = field(default=None, metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoPrivacyDomainSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPrivacyDomainRequest:
    path_params: AddVideoPrivacyDomainPathParams = field(default=None)
    security: AddVideoPrivacyDomainSecurity = field(default=None)
    

@dataclass
class AddVideoPrivacyDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
