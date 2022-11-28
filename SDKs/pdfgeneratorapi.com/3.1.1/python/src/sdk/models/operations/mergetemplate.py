from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class MergeTemplateQueryParams:
    template_id: int = field(metadata={'query_param': { 'field_name': 'templateId', 'style': 'form', 'explode': True }})
    format: Optional[shared.FormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    output: Optional[shared.OutputEnum] = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class MergeTemplate200ApplicationJSONMeta:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-type') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class MergeTemplate200ApplicationJSON:
    meta: Optional[MergeTemplate200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
class MergeTemplate401ApplicationJSONErrorEnum(str, Enum):
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
class MergeTemplate401ApplicationJSON:
    error: Optional[MergeTemplate401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class MergeTemplate403ApplicationJSONErrorEnum(str, Enum):
    YOUR_ACCOUNT_HAS_EXCEEDED_THE_MONTHLY_DOCUMENT_GENERATION_LIMIT_ = "Your account has exceeded the monthly document generation limit."


@dataclass_json
@dataclass
class MergeTemplate403ApplicationJSON:
    error: Optional[MergeTemplate403ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class MergeTemplate404ApplicationJSONErrorEnum(str, Enum):
    ENTITY_NOT_FOUND = "Entity not found"
    RESOURCE_NOT_FOUND = "Resource not found"
    NONE_OF_THE_TEMPLATES_IS_AVAILABLE_FOR_THE_WORKSPACE_ = "None of the templates is available for the workspace."


@dataclass_json
@dataclass
class MergeTemplate404ApplicationJSON:
    error: Optional[MergeTemplate404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class MergeTemplate422ApplicationJSONErrorEnum(str, Enum):
    UNABLE_TO_PARSE_JSON_PLEASE_CHECK_FORMATTING = "Unable to parse JSON, please check formatting"
    REQUIRED_PARAMETER_MISSING = "Required parameter missing"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_DEFINITION_NOT_DEFINED = "Required parameter missing: template definition not defined"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_NOT_DEFINED = "Required parameter missing: template not defined"


@dataclass_json
@dataclass
class MergeTemplate422ApplicationJSON:
    error: Optional[MergeTemplate422ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class MergeTemplate500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class MergeTemplateRequest:
    query_params: MergeTemplateQueryParams = field()
    request: shared.Data = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergeTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    merge_template_200_application_json_object: Optional[MergeTemplate200ApplicationJSON] = field(default=None)
    merge_template_401_application_json_object: Optional[MergeTemplate401ApplicationJSON] = field(default=None)
    merge_template_403_application_json_object: Optional[MergeTemplate403ApplicationJSON] = field(default=None)
    merge_template_404_application_json_object: Optional[MergeTemplate404ApplicationJSON] = field(default=None)
    merge_template_422_application_json_object: Optional[MergeTemplate422ApplicationJSON] = field(default=None)
    merge_template_500_application_json_object: Optional[MergeTemplate500ApplicationJSON] = field(default=None)
    
