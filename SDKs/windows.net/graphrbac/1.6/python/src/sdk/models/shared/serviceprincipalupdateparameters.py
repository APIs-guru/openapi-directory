from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServicePrincipalUpdateParameters:
    account_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountEnabled' }})
    app_role_assignment_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appRoleAssignmentRequired' }})
    key_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyCredentials' }})
    password_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordCredentials' }})
    service_principal_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicePrincipalType' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
