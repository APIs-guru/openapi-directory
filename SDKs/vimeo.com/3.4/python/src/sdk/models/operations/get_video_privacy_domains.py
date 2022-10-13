from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoPrivacyDomainsPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoPrivacyDomainsQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoPrivacyDomainsRequest:
    path_params: GetVideoPrivacyDomainsPathParams = field(default=None)
    query_params: GetVideoPrivacyDomainsQueryParams = field(default=None)
    

@dataclass
class GetVideoPrivacyDomainsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    domains: Optional[List[shared.Domain]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
