from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideoPrivacyDomainPathParams:
    domain: str = field(default=None, metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoPrivacyDomainSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoPrivacyDomainRequest:
    path_params: DeleteVideoPrivacyDomainPathParams = field(default=None)
    security: DeleteVideoPrivacyDomainSecurity = field(default=None)
    

@dataclass
class DeleteVideoPrivacyDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
