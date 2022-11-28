from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVcenterDatasourceSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddVcenterDatasourceRequest:
    request: shared.VCenterDataSourceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddVcenterDatasourceSecurity = field()
    

@dataclass
class AddVcenterDatasourceResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    v_center_data_source: Optional[shared.VCenterDataSource] = field(default=None)
    
