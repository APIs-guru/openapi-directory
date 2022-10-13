from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportTransactionsPathParams:
    budget_id: str = field(default=None, metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportTransactionsRequest:
    path_params: ImportTransactionsPathParams = field(default=None)
    

@dataclass
class ImportTransactionsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    transactions_import_response: Optional[shared.TransactionsImportResponse] = field(default=None)
    
