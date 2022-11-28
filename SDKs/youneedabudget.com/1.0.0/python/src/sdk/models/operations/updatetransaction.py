from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTransactionPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    transaction_id: str = field(metadata={'path_param': { 'field_name': 'transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTransactionRequest:
    path_params: UpdateTransactionPathParams = field()
    request: shared.SaveTransactionWrapper = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    transaction_response: Optional[shared.TransactionResponse] = field(default=None)
    
