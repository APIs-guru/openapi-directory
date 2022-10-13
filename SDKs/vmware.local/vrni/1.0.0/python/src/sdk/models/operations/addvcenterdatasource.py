from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVcenterDatasourceSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddVcenterDatasourceRequest:
    request: shared.VCenterDataSourceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddVcenterDatasourceSecurity = field(default=None)
    

@dataclass
class AddVcenterDatasourceResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v_center_data_source: Optional[shared.VCenterDataSource] = field(default=None)
    
