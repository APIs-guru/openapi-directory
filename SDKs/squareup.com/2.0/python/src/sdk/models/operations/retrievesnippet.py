from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveSnippetPathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSnippetSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveSnippetRequest:
    path_params: RetrieveSnippetPathParams = field(default=None)
    security: RetrieveSnippetSecurity = field(default=None)
    

@dataclass
class RetrieveSnippetResponse:
    content_type: str = field(default=None)
    retrieve_snippet_response: Optional[shared.RetrieveSnippetResponse] = field(default=None)
    status_code: int = field(default=None)
    
