from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsUpdatePasswordCredentialsPathParams:
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsRequests:
    password_credentials_update_parameters: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    password_credentials_update_parameters1: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsRequest:
    path_params: ServicePrincipalsUpdatePasswordCredentialsPathParams = field(default=None)
    query_params: ServicePrincipalsUpdatePasswordCredentialsQueryParams = field(default=None)
    request: ServicePrincipalsUpdatePasswordCredentialsRequests = field(default=None)
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
