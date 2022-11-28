from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsListPasswordCredentialsPathParams:
    application_object_id: str = field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsListPasswordCredentialsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsListPasswordCredentialsRequest:
    path_params: ApplicationsListPasswordCredentialsPathParams = field()
    query_params: ApplicationsListPasswordCredentialsQueryParams = field()
    

@dataclass
class ApplicationsListPasswordCredentialsResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    password_credential_list_result: Optional[shared.PasswordCredentialListResult] = field(default=None)
    
