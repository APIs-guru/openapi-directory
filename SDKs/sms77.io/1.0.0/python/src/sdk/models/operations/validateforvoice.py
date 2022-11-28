from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ValidateForVoiceQueryParams:
    number: str = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ValidateForVoice200ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class ValidateForVoiceRequest:
    query_params: ValidateForVoiceQueryParams = field()
    

@dataclass
class ValidateForVoiceResponse:
    content_type: str = field()
    status_code: int = field()
    validate_for_voice_200_application_json_object: Optional[ValidateForVoice200ApplicationJSON] = field(default=None)
    
