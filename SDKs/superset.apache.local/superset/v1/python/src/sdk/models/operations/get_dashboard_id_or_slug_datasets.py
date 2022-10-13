from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDashboardIDOrSlugDatasetsPathParams:
    id_or_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'id_or_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDashboardIDOrSlugDatasetsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDashboardIDOrSlugDatasetsRequest:
    path_params: GetDashboardIDOrSlugDatasetsPathParams = field(default=None)
    security: GetDashboardIDOrSlugDatasetsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugDatasets200ApplicationJSON:
    result: Optional[List[shared.DashboardDatasetSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugDatasets400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugDatasets401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugDatasets404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDashboardIDOrSlugDatasetsResponse:
    content_type: str = field(default=None)
    get_dashboard_id_or_slug_datasets_200_application_json_object: Optional[GetDashboardIDOrSlugDatasets200ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_datasets_400_application_json_object: Optional[GetDashboardIDOrSlugDatasets400ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_datasets_401_application_json_object: Optional[GetDashboardIDOrSlugDatasets401ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_datasets_404_application_json_object: Optional[GetDashboardIDOrSlugDatasets404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
