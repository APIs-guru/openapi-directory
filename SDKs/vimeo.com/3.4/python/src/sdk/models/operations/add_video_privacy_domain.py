from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideoPrivacyDomainPathParams:
    domain: str = field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoPrivacyDomainSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPrivacyDomainRequest:
    path_params: AddVideoPrivacyDomainPathParams = field()
    security: AddVideoPrivacyDomainSecurity = field()
    

@dataclass
class AddVideoPrivacyDomainResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
