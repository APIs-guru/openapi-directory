from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportTransactionsPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportTransactionsRequest:
    path_params: ImportTransactionsPathParams = field()
    

@dataclass
class ImportTransactionsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    transactions_import_response: Optional[shared.TransactionsImportResponse] = field(default=None)
    
