from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CopyTemplateQueryParams:
    template_id: int = field(metadata={'query_param': { 'field_name': 'templateId', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CopyTemplate200ApplicationJSON:
    response: Optional[shared.TemplateDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
class CopyTemplate401ApplicationJSONErrorEnum(str, Enum):
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
class CopyTemplate401ApplicationJSON:
    error: Optional[CopyTemplate401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class CopyTemplate403ApplicationJSONErrorEnum(str, Enum):
    YOUR_ACCOUNT_HAS_EXCEEDED_THE_MONTHLY_DOCUMENT_GENERATION_LIMIT_ = "Your account has exceeded the monthly document generation limit."


@dataclass_json
@dataclass
class CopyTemplate403ApplicationJSON:
    error: Optional[CopyTemplate403ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class CopyTemplate404ApplicationJSONErrorEnum(str, Enum):
    ENTITY_NOT_FOUND = "Entity not found"
    RESOURCE_NOT_FOUND = "Resource not found"
    NONE_OF_THE_TEMPLATES_IS_AVAILABLE_FOR_THE_WORKSPACE_ = "None of the templates is available for the workspace."


@dataclass_json
@dataclass
class CopyTemplate404ApplicationJSON:
    error: Optional[CopyTemplate404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class CopyTemplate422ApplicationJSONErrorEnum(str, Enum):
    UNABLE_TO_PARSE_JSON_PLEASE_CHECK_FORMATTING = "Unable to parse JSON, please check formatting"
    REQUIRED_PARAMETER_MISSING = "Required parameter missing"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_DEFINITION_NOT_DEFINED = "Required parameter missing: template definition not defined"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_NOT_DEFINED = "Required parameter missing: template not defined"


@dataclass_json
@dataclass
class CopyTemplate422ApplicationJSON:
    error: Optional[CopyTemplate422ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class CopyTemplate500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class CopyTemplateRequest:
    query_params: CopyTemplateQueryParams = field()
    

@dataclass
class CopyTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    copy_template_200_application_json_object: Optional[CopyTemplate200ApplicationJSON] = field(default=None)
    copy_template_401_application_json_object: Optional[CopyTemplate401ApplicationJSON] = field(default=None)
    copy_template_403_application_json_object: Optional[CopyTemplate403ApplicationJSON] = field(default=None)
    copy_template_404_application_json_object: Optional[CopyTemplate404ApplicationJSON] = field(default=None)
    copy_template_422_application_json_object: Optional[CopyTemplate422ApplicationJSON] = field(default=None)
    copy_template_500_application_json_object: Optional[CopyTemplate500ApplicationJSON] = field(default=None)
    
