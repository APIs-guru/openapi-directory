from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class SplunkAssetSyncUpdatedJSONQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    since: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class SplunkAssetSyncUpdatedJSONSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SplunkAssetSyncUpdatedJSONRequest:
    query_params: SplunkAssetSyncUpdatedJSONQueryParams = field()
    security: SplunkAssetSyncUpdatedJSONSecurity = field()
    

@dataclass
class SplunkAssetSyncUpdatedJSONResponse:
    content_type: str = field()
    status_code: int = field()
    assets_with_checkpoint: Optional[shared.AssetsWithCheckpoint] = field(default=None)
    
