from dataclasses import dataclass, field



@dataclass
class DeleteInlineScriptTagPathParams:
    inline_script_tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'inlineScriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInlineScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteInlineScriptTagRequest:
    path_params: DeleteInlineScriptTagPathParams = field(default=None)
    security: DeleteInlineScriptTagSecurity = field(default=None)
    

@dataclass
class DeleteInlineScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
