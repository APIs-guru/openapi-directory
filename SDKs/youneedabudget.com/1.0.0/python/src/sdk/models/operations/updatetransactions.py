from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTransactionsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTransactionsRequest:
    path_params: UpdateTransactionsPathParams = field()
    request: shared.UpdateTransactionsWrapper = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    save_transactions_response: Optional[shared.SaveTransactionsResponse] = field(default=None)
    
