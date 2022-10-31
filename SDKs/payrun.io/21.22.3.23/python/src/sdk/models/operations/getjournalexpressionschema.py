from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetJournalExpressionSchemaHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalExpressionSchemaRequest:
    headers: GetJournalExpressionSchemaHeaders = field(default=None)
    

@dataclass
class GetJournalExpressionSchemaResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_expression_data_table: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
