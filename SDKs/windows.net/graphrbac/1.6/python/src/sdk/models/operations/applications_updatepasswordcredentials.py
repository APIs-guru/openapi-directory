from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsUpdatePasswordCredentialsPathParams:
    application_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsUpdatePasswordCredentialsQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsUpdatePasswordCredentialsRequests:
    password_credentials_update_parameters: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    password_credentials_update_parameters1: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplicationsUpdatePasswordCredentialsRequest:
    path_params: ApplicationsUpdatePasswordCredentialsPathParams = field(default=None)
    query_params: ApplicationsUpdatePasswordCredentialsQueryParams = field(default=None)
    request: ApplicationsUpdatePasswordCredentialsRequests = field(default=None)
    

@dataclass
class ApplicationsUpdatePasswordCredentialsResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
