from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetAssetsOrderByEnum(str, Enum):
    ASSET_TYPE = "AssetType"
    ASSET_NAME = "AssetName"
    ASSET_NUMBER = "AssetNumber"
    PURCHASE_DATE = "PurchaseDate"
    PURCHASE_PRICE = "PurchasePrice"
    DISPOSAL_DATE = "DisposalDate"
    DISPOSAL_PRICE = "DisposalPrice"

class GetAssetsSortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetAssetsQueryParams:
    filter_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterBy', 'style': 'form', 'explode': True }})
    order_by: Optional[GetAssetsOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    sort_direction: Optional[GetAssetsSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortDirection', 'style': 'form', 'explode': True }})
    status: shared.AssetStatusQueryParamEnum = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssetsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id' }})
    

@dataclass
class GetAssetsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAssetsRequest:
    query_params: GetAssetsQueryParams = field(default=None)
    headers: GetAssetsHeaders = field(default=None)
    security: GetAssetsSecurity = field(default=None)
    

@dataclass
class GetAssetsResponse:
    assets: Optional[shared.Assets] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
