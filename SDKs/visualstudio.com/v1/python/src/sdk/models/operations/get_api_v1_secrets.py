from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAPIV1SecretsQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1SecretsRequest:
    query_params: GetAPIV1SecretsQueryParams = field(default=None)
    

@dataclass
class GetAPIV1SecretsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    scoped_secret_result_bodies: Optional[List[shared.ScopedSecretResultBody]] = field(default=None)
    status_code: int = field(default=None)
    
