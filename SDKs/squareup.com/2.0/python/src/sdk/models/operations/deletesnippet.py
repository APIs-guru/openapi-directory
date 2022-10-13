from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSnippetPathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSnippetSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteSnippetRequest:
    path_params: DeleteSnippetPathParams = field(default=None)
    security: DeleteSnippetSecurity = field(default=None)
    

@dataclass
class DeleteSnippetResponse:
    content_type: str = field(default=None)
    delete_snippet_response: Optional[shared.DeleteSnippetResponse] = field(default=None)
    status_code: int = field(default=None)
    
