from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteDashboardPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDashboardPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteDashboardPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboardPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboardPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboardPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboardPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboardPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteDashboardPkRequest:
    path_params: DeleteDashboardPkPathParams = field()
    security: DeleteDashboardPkSecurity = field()
    

@dataclass
class DeleteDashboardPkResponse:
    content_type: str = field()
    status_code: int = field()
    delete_dashboard_pk_200_application_json_object: Optional[DeleteDashboardPk200ApplicationJSON] = field(default=None)
    delete_dashboard_pk_401_application_json_object: Optional[DeleteDashboardPk401ApplicationJSON] = field(default=None)
    delete_dashboard_pk_403_application_json_object: Optional[DeleteDashboardPk403ApplicationJSON] = field(default=None)
    delete_dashboard_pk_404_application_json_object: Optional[DeleteDashboardPk404ApplicationJSON] = field(default=None)
    delete_dashboard_pk_422_application_json_object: Optional[DeleteDashboardPk422ApplicationJSON] = field(default=None)
    delete_dashboard_pk_500_application_json_object: Optional[DeleteDashboardPk500ApplicationJSON] = field(default=None)
    
