from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsUpdateKeyCredentialsPathParams:
    object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsUpdateKeyCredentialsQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsUpdateKeyCredentialsRequests:
    key_credentials_update_parameters: Optional[shared.KeyCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    key_credentials_update_parameters1: Optional[shared.KeyCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ServicePrincipalsUpdateKeyCredentialsRequest:
    path_params: ServicePrincipalsUpdateKeyCredentialsPathParams = field(default=None)
    query_params: ServicePrincipalsUpdateKeyCredentialsQueryParams = field(default=None)
    request: ServicePrincipalsUpdateKeyCredentialsRequests = field(default=None)
    

@dataclass
class ServicePrincipalsUpdateKeyCredentialsResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
