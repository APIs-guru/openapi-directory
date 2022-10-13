from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutDashboardPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDashboardPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutDashboardPkRequest:
    path_params: PutDashboardPkPathParams = field(default=None)
    request: shared.DashboardRestAPIPut = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutDashboardPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PutDashboardPk200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.DashboardRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PutDashboardPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutDashboardPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutDashboardPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutDashboardPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutDashboardPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutDashboardPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PutDashboardPkResponse:
    content_type: str = field(default=None)
    put_dashboard_pk_200_application_json_object: Optional[PutDashboardPk200ApplicationJSON] = field(default=None)
    put_dashboard_pk_400_application_json_object: Optional[PutDashboardPk400ApplicationJSON] = field(default=None)
    put_dashboard_pk_401_application_json_object: Optional[PutDashboardPk401ApplicationJSON] = field(default=None)
    put_dashboard_pk_403_application_json_object: Optional[PutDashboardPk403ApplicationJSON] = field(default=None)
    put_dashboard_pk_404_application_json_object: Optional[PutDashboardPk404ApplicationJSON] = field(default=None)
    put_dashboard_pk_422_application_json_object: Optional[PutDashboardPk422ApplicationJSON] = field(default=None)
    put_dashboard_pk_500_application_json_object: Optional[PutDashboardPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
