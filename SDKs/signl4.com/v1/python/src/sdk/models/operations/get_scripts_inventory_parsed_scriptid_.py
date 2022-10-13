from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScriptsInventoryParsedScriptIDPathParams:
    script_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scriptId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScriptsInventoryParsedScriptIDQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScriptsInventoryParsedScriptIDRequest:
    path_params: GetScriptsInventoryParsedScriptIDPathParams = field(default=None)
    query_params: GetScriptsInventoryParsedScriptIDQueryParams = field(default=None)
    

@dataclass
class GetScriptsInventoryParsedScriptIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    script_instance_details: Optional[shared.ScriptInstanceDetails] = field(default=None)
    status_code: int = field(default=None)
    
