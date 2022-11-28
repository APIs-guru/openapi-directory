from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAPIV1SecretsQueryParams:
    plan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'planId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1SecretsRequest:
    query_params: GetAPIV1SecretsQueryParams = field()
    

@dataclass
class GetAPIV1SecretsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    scoped_secret_result_bodies: Optional[List[shared.ScopedSecretResultBody]] = field(default=None)
    
