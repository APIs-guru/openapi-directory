from dataclasses import dataclass, field



@dataclass
class GetShopsShopIDShippingProfilesPathParams:
    shop_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shop_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsShopIDShippingProfilesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShopsShopIDShippingProfilesRequest:
    path_params: GetShopsShopIDShippingProfilesPathParams = field(default=None)
    security: GetShopsShopIDShippingProfilesSecurity = field(default=None)
    

@dataclass
class GetShopsShopIDShippingProfilesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
