from dataclasses import dataclass, field



@dataclass
class DeleteScriptTagPathParams:
    script_tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScriptTagSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteScriptTagRequest:
    path_params: DeleteScriptTagPathParams = field(default=None)
    security: DeleteScriptTagSecurity = field(default=None)
    

@dataclass
class DeleteScriptTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
