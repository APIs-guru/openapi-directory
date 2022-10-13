from dataclasses import dataclass, field



@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONPathParams:
    script_tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONRequest:
    path_params: DeleteV1ScriptTagsScriptTagIDJSONPathParams = field(default=None)
    security: DeleteV1ScriptTagsScriptTagIDJSONSecurity = field(default=None)
    

@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
