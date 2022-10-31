from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisTransactionFromEmployerPathParams:
    cis_transaction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CisTransactionId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisTransactionFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisTransactionFromEmployerRequest:
    path_params: GetCisTransactionFromEmployerPathParams = field(default=None)
    headers: GetCisTransactionFromEmployerHeaders = field(default=None)
    

@dataclass
class GetCisTransactionFromEmployerResponse:
    cis_transaction: Optional[shared.CisTransaction] = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
