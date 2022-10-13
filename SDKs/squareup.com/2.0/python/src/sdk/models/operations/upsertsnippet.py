from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpsertSnippetPathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpsertSnippetSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpsertSnippetRequest:
    path_params: UpsertSnippetPathParams = field(default=None)
    request: shared.UpsertSnippetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpsertSnippetSecurity = field(default=None)
    

@dataclass
class UpsertSnippetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upsert_snippet_response: Optional[shared.UpsertSnippetResponse] = field(default=None)
    
