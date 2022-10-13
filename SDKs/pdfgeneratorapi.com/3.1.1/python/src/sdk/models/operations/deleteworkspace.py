from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteWorkspaceQueryParams:
    workspace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'workspaceId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteWorkspaceRequest:
    query_params: DeleteWorkspaceQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteWorkspace200ApplicationJSONResponse:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass_json
@dataclass
class DeleteWorkspace200ApplicationJSON:
    response: Optional[DeleteWorkspace200ApplicationJSONResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    
class DeleteWorkspace401ApplicationJSONErrorEnum(str, Enum):
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
class DeleteWorkspace401ApplicationJSON:
    error: Optional[DeleteWorkspace401ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class DeleteWorkspace403ApplicationJSONErrorEnum(str, Enum):
    YOUR_ACCOUNT_HAS_EXCEEDED_THE_MONTHLY_DOCUMENT_GENERATION_LIMIT_ = "Your account has exceeded the monthly document generation limit."


@dataclass_json
@dataclass
class DeleteWorkspace403ApplicationJSON:
    error: Optional[DeleteWorkspace403ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class DeleteWorkspace404ApplicationJSONErrorEnum(str, Enum):
    ENTITY_NOT_FOUND = "Entity not found"
    RESOURCE_NOT_FOUND = "Resource not found"
    NONE_OF_THE_TEMPLATES_IS_AVAILABLE_FOR_THE_WORKSPACE_ = "None of the templates is available for the workspace."


@dataclass_json
@dataclass
class DeleteWorkspace404ApplicationJSON:
    error: Optional[DeleteWorkspace404ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class DeleteWorkspace422ApplicationJSONErrorEnum(str, Enum):
    UNABLE_TO_PARSE_JSON_PLEASE_CHECK_FORMATTING = "Unable to parse JSON, please check formatting"
    REQUIRED_PARAMETER_MISSING = "Required parameter missing"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_DEFINITION_NOT_DEFINED = "Required parameter missing: template definition not defined"
    REQUIRED_PARAMETER_MISSING_TEMPLATE_NOT_DEFINED = "Required parameter missing: template not defined"


@dataclass_json
@dataclass
class DeleteWorkspace422ApplicationJSON:
    error: Optional[DeleteWorkspace422ApplicationJSONErrorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class DeleteWorkspace500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class DeleteWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_workspace_200_application_json_object: Optional[DeleteWorkspace200ApplicationJSON] = field(default=None)
    delete_workspace_401_application_json_object: Optional[DeleteWorkspace401ApplicationJSON] = field(default=None)
    delete_workspace_403_application_json_object: Optional[DeleteWorkspace403ApplicationJSON] = field(default=None)
    delete_workspace_404_application_json_object: Optional[DeleteWorkspace404ApplicationJSON] = field(default=None)
    delete_workspace_422_application_json_object: Optional[DeleteWorkspace422ApplicationJSON] = field(default=None)
    delete_workspace_500_application_json_object: Optional[DeleteWorkspace500ApplicationJSON] = field(default=None)
    
