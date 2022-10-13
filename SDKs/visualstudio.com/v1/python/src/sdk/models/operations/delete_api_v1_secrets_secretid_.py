from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAPIV1SecretsSecretIDPathParams:
    secret_id: str = field(default=None, metadata={'path_param': { 'field_name': 'secretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIV1SecretsSecretIDQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    scope: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAPIV1SecretsSecretIDRequest:
    path_params: DeleteAPIV1SecretsSecretIDPathParams = field(default=None)
    query_params: DeleteAPIV1SecretsSecretIDQueryParams = field(default=None)
    

@dataclass
class DeleteAPIV1SecretsSecretIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
