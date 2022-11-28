from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsListKeyCredentialsPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsListKeyCredentialsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsListKeyCredentialsRequest:
    path_params: ServicePrincipalsListKeyCredentialsPathParams = field()
    query_params: ServicePrincipalsListKeyCredentialsQueryParams = field()
    

@dataclass
class ServicePrincipalsListKeyCredentialsResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    key_credential_list_result: Optional[shared.KeyCredentialListResult] = field(default=None)
    
