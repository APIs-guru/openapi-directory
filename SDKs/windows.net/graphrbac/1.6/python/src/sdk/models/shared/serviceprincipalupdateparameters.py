from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServicePrincipalUpdateParameters:
    r"""ServicePrincipalUpdateParameters
    Request parameters for update an existing service principal.
    """
    
    account_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountEnabled') }})
    app_role_assignment_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appRoleAssignmentRequired') }})
    key_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyCredentials') }})
    password_credentials: Optional[List[dict[str, dict[str, Any]]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordCredentials') }})
    service_principal_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePrincipalType') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
