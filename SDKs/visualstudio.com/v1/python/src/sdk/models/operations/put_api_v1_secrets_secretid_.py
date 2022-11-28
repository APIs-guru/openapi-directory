from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutAPIV1SecretsSecretIDPathParams:
    secret_id: str = field(metadata={'path_param': { 'field_name': 'secretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAPIV1SecretsSecretIDQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class PutAPIV1SecretsSecretIDRequests:
    scoped_update_secret_body: Optional[shared.ScopedUpdateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    scoped_update_secret_body1: Optional[shared.ScopedUpdateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    scoped_update_secret_body2: Optional[shared.ScopedUpdateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    scoped_update_secret_body3: Optional[shared.ScopedUpdateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAPIV1SecretsSecretIDRequest:
    path_params: PutAPIV1SecretsSecretIDPathParams = field()
    query_params: PutAPIV1SecretsSecretIDQueryParams = field()
    request: Optional[PutAPIV1SecretsSecretIDRequests] = field(default=None)
    

@dataclass
class PutAPIV1SecretsSecretIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    scoped_secret_result_body: Optional[shared.ScopedSecretResultBody] = field(default=None)
    
