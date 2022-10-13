from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddNsxvManagerDatasourceSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddNsxvManagerDatasourceRequest:
    request: Optional[shared.NsxvManagerDataSourceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddNsxvManagerDatasourceSecurity = field(default=None)
    

@dataclass
class AddNsxvManagerDatasourceResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    content_type: str = field(default=None)
    nsxv_manager_data_source: Optional[shared.NsxvManagerDataSource] = field(default=None)
    status_code: int = field(default=None)
    
