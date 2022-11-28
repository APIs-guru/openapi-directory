from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePrincipalsUpdatePasswordCredentialsPathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsRequests:
    password_credentials_update_parameters: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    password_credentials_update_parameters1: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsRequest:
    path_params: ServicePrincipalsUpdatePasswordCredentialsPathParams = field()
    query_params: ServicePrincipalsUpdatePasswordCredentialsQueryParams = field()
    request: ServicePrincipalsUpdatePasswordCredentialsRequests = field()
    

@dataclass
class ServicePrincipalsUpdatePasswordCredentialsResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
