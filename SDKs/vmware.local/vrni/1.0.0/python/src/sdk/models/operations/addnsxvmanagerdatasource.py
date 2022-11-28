from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddNsxvManagerDatasourceSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddNsxvManagerDatasourceRequest:
    security: AddNsxvManagerDatasourceSecurity = field()
    request: Optional[shared.NsxvManagerDataSourceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddNsxvManagerDatasourceResponse:
    content_type: str = field()
    status_code: int = field()
    api_error: Optional[shared.APIError] = field(default=None)
    nsxv_manager_data_source: Optional[shared.NsxvManagerDataSource] = field(default=None)
    
