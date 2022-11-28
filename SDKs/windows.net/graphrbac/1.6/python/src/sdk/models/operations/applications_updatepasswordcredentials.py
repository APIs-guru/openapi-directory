from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsUpdatePasswordCredentialsPathParams:
    application_object_id: str = field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsUpdatePasswordCredentialsQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsUpdatePasswordCredentialsRequests:
    password_credentials_update_parameters: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    password_credentials_update_parameters1: Optional[shared.PasswordCredentialsUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplicationsUpdatePasswordCredentialsRequest:
    path_params: ApplicationsUpdatePasswordCredentialsPathParams = field()
    query_params: ApplicationsUpdatePasswordCredentialsQueryParams = field()
    request: ApplicationsUpdatePasswordCredentialsRequests = field()
    

@dataclass
class ApplicationsUpdatePasswordCredentialsResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
