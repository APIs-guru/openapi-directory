from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteInlineScriptTagPathParams:
    inline_script_tag_id: int = field(metadata={'path_param': { 'field_name': 'inlineScriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInlineScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteInlineScriptTagRequest:
    path_params: DeleteInlineScriptTagPathParams = field()
    security: DeleteInlineScriptTagSecurity = field()
    

@dataclass
class DeleteInlineScriptTagResponse:
    content_type: str = field()
    status_code: int = field()
    
