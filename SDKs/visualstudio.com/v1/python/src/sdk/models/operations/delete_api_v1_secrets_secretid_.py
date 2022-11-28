from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1SecretsSecretIDPathParams:
    secret_id: str = field(metadata={'path_param': { 'field_name': 'secretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1SecretsSecretIDQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    scope: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAPIV1SecretsSecretIDRequest:
    path_params: DeleteAPIV1SecretsSecretIDPathParams = field()
    query_params: DeleteAPIV1SecretsSecretIDQueryParams = field()
    

@dataclass
class DeleteAPIV1SecretsSecretIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
