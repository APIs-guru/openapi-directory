from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetEditorURLLanguageEnum(str, Enum):
    EN = "en"
    ET = "et"
    CS = "cs"
    SK = "sk"
    RU = "ru"


@dataclass
class GetEditorURLQueryParams:
    template_id: int = field(metadata={'query_param': { 'field_name': 'templateId', 'style': 'form', 'explode': True }})
    language: Optional[GetEditorURLLanguageEnum] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetEditorURL200ApplicationJSON:
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
class GetEditorURL401ApplicationJSONErrorEnum(str, Enum):
    AUTHENTICATION_FAILED_REQUEST_EXPIRED = "Authentication failed: request expired"
    AUTHENTICATION_FAILED_SIGNATURE_OR_SECRET_MISSING = "Authentication failed: signature or secret missing"
    AUTHENTICATION_FAILED_WORKSPACE_MISSING = "Authentication failed: workspace missing"
    AUTHENTICATION_FAILED_KEY_MISSING = "Authentication failed: key missing"
    AUTHENTICATION_FAILED_PROPERTY_ISS_ISSUER_MISSING_IN_JWT = "Authentication failed: property 'iss' (issuer) missing in JWT"
    AUTHENTICATION_FAILED_PROPERTY_SUB_SUBJECT_MISSING_IN_JWT = "Authentication failed: property 'sub' (subject) missing in JWT"
    AUTHENTICATION_FAILED_PROPERTY_EXP_EXPIRATION_TIME_MISSING_IN_JWT = "Authentication failed: property 'exp' (expiration time) missing in JWT"
    AUTHENTICATION_FAILED_INVALID_ISS_ISSUER_ = "Authentication failed: invalid 'iss' (issuer)"
    AUTHENTICATION_FAILED_INCORRECT_SIGNATURE = "Authentication failed: incorrect signature"
    AUTHENTICATION_FAILED = "Authentication failed"


@dataclass_json
@dataclass
class GetEditorURL401ApplicationJSON:
    error: Optional[GetEditorURL401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class GetEditorURL403ApplicationJSONErrorEnum(str, Enum):
    YOUR_ACCOUNT_HAS_EXCEEDED_THE_MONTHLY_DOCUMENT_GENERATION_LIMIT_ = "Your account has exceeded the monthly document generation limit."


@dataclass_json
@dataclass
class GetEditorURL403ApplicationJSON:
    error: Optional[GetEditorURL403ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class GetEditorURL404ApplicationJSONErrorEnum(str, Enum):
    ENTITY_NOT_FOUND = "Entity not found"
    RESOURCE_NOT_FOUND = "Resource not found"
    NONE_OF_THE_TEMPLATES_IS_AVAILABLE_FOR_THE_WORKSPACE_ = "None of the templates is available for the workspace."


@dataclass_json
@dataclass
class GetEditorURL404ApplicationJSON:
    error: Optional[GetEditorURL404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class GetEditorURL422ApplicationJSONErrorEnum(str, Enum):
    UNABLE_TO_PARSE_JSON_PLEASE_CHECK_FORMATTING = "Unable to parse JSON, please check formatting"
    REQUIRED_PARAMETER_MISSING = "Required parameter missing"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_DEFINITION_NOT_DEFINED = "Required parameter missing: template definition not defined"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_NOT_DEFINED = "Required parameter missing: template not defined"


@dataclass_json
@dataclass
class GetEditorURL422ApplicationJSON:
    error: Optional[GetEditorURL422ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class GetEditorURL500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetEditorURLRequest:
    query_params: GetEditorURLQueryParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEditorURLResponse:
    content_type: str = field()
    status_code: int = field()
    get_editor_url_200_application_json_object: Optional[GetEditorURL200ApplicationJSON] = field(default=None)
    get_editor_url_401_application_json_object: Optional[GetEditorURL401ApplicationJSON] = field(default=None)
    get_editor_url_403_application_json_object: Optional[GetEditorURL403ApplicationJSON] = field(default=None)
    get_editor_url_404_application_json_object: Optional[GetEditorURL404ApplicationJSON] = field(default=None)
    get_editor_url_422_application_json_object: Optional[GetEditorURL422ApplicationJSON] = field(default=None)
    get_editor_url_500_application_json_object: Optional[GetEditorURL500ApplicationJSON] = field(default=None)
    
