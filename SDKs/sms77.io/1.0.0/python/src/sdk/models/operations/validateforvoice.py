from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ValidateForVoiceQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    number: str = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class ValidateForVoiceRequest:
    query_params: ValidateForVoiceQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ValidateForVoice200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class ValidateForVoiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validate_for_voice_200_application_json_object: Optional[ValidateForVoice200ApplicationJSON] = field(default=None)
    
