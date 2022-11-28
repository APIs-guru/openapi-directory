from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreateTemplate200ApplicationJSON:
    response: Optional[shared.TemplateDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
class CreateTemplate401ApplicationJSONErrorEnum(str, Enum):
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
class CreateTemplate401ApplicationJSON:
    error: Optional[CreateTemplate401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class CreateTemplate403ApplicationJSONErrorEnum(str, Enum):
    YOUR_ACCOUNT_HAS_EXCEEDED_THE_MONTHLY_DOCUMENT_GENERATION_LIMIT_ = "Your account has exceeded the monthly document generation limit."


@dataclass_json
@dataclass
class CreateTemplate403ApplicationJSON:
    error: Optional[CreateTemplate403ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class CreateTemplate404ApplicationJSONErrorEnum(str, Enum):
    ENTITY_NOT_FOUND = "Entity not found"
    RESOURCE_NOT_FOUND = "Resource not found"
    NONE_OF_THE_TEMPLATES_IS_AVAILABLE_FOR_THE_WORKSPACE_ = "None of the templates is available for the workspace."


@dataclass_json
@dataclass
class CreateTemplate404ApplicationJSON:
    error: Optional[CreateTemplate404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class CreateTemplate422ApplicationJSONErrorEnum(str, Enum):
    UNABLE_TO_PARSE_JSON_PLEASE_CHECK_FORMATTING = "Unable to parse JSON, please check formatting"
    REQUIRED_PARAMETER_MISSING = "Required parameter missing"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_DEFINITION_NOT_DEFINED = "Required parameter missing: template definition not defined"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_NOT_DEFINED = "Required parameter missing: template not defined"


@dataclass_json
@dataclass
class CreateTemplate422ApplicationJSON:
    error: Optional[CreateTemplate422ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class CreateTemplate500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class CreateTemplateRequest:
    request: shared.TemplateDefinitionNew = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    create_template_200_application_json_object: Optional[CreateTemplate200ApplicationJSON] = field(default=None)
    create_template_401_application_json_object: Optional[CreateTemplate401ApplicationJSON] = field(default=None)
    create_template_403_application_json_object: Optional[CreateTemplate403ApplicationJSON] = field(default=None)
    create_template_404_application_json_object: Optional[CreateTemplate404ApplicationJSON] = field(default=None)
    create_template_422_application_json_object: Optional[CreateTemplate422ApplicationJSON] = field(default=None)
    create_template_500_application_json_object: Optional[CreateTemplate500ApplicationJSON] = field(default=None)
    
