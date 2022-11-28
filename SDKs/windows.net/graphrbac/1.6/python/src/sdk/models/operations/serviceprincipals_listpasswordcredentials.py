from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsListPasswordCredentialsPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsListPasswordCredentialsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsListPasswordCredentialsRequest:
    path_params: ServicePrincipalsListPasswordCredentialsPathParams = field()
    query_params: ServicePrincipalsListPasswordCredentialsQueryParams = field()
    

@dataclass
class ServicePrincipalsListPasswordCredentialsResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    password_credential_list_result: Optional[shared.PasswordCredentialListResult] = field(default=None)
    
