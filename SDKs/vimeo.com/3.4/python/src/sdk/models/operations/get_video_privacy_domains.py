from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVideoPrivacyDomainsPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoPrivacyDomainsQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoPrivacyDomainsRequest:
    path_params: GetVideoPrivacyDomainsPathParams = field()
    query_params: GetVideoPrivacyDomainsQueryParams = field()
    

@dataclass
class GetVideoPrivacyDomainsResponse:
    content_type: str = field()
    status_code: int = field()
    domains: Optional[List[shared.Domain]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
