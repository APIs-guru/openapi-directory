from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ApplicationsListPasswordCredentialsPathParams:
    application_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsListPasswordCredentialsQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsListPasswordCredentialsRequest:
    path_params: ApplicationsListPasswordCredentialsPathParams = field(default=None)
    query_params: ApplicationsListPasswordCredentialsQueryParams = field(default=None)
    

@dataclass
class ApplicationsListPasswordCredentialsResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    password_credential_list_result: Optional[shared.PasswordCredentialListResult] = field(default=None)
    status_code: int = field(default=None)
    
