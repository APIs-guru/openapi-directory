from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONPathParams:
    script_tag_id: int = field(metadata={'path_param': { 'field_name': 'scriptTagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONRequest:
    path_params: DeleteV1ScriptTagsScriptTagIDJSONPathParams = field()
    security: DeleteV1ScriptTagsScriptTagIDJSONSecurity = field()
    

@dataclass
class DeleteV1ScriptTagsScriptTagIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    
