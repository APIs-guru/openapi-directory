from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScriptsInventoryParsedScriptIDPathParams:
    script_id: str = field(metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScriptsInventoryParsedScriptIDQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScriptsInventoryParsedScriptIDRequest:
    path_params: GetScriptsInventoryParsedScriptIDPathParams = field()
    query_params: GetScriptsInventoryParsedScriptIDQueryParams = field()
    

@dataclass
class GetScriptsInventoryParsedScriptIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    
