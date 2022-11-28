from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostAPIV1SecretsQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIV1SecretsRequests:
    scoped_create_secret_body: Optional[shared.ScopedCreateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    scoped_create_secret_body1: Optional[shared.ScopedCreateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    scoped_create_secret_body2: Optional[shared.ScopedCreateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    scoped_create_secret_body3: Optional[shared.ScopedCreateSecretBody] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIV1SecretsRequest:
    query_params: PostAPIV1SecretsQueryParams = field()
    request: Optional[PostAPIV1SecretsRequests] = field(default=None)
    

@dataclass
class PostAPIV1SecretsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    scoped_secret_result_body: Optional[shared.ScopedSecretResultBody] = field(default=None)
    
