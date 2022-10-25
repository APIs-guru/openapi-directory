from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class UserAPIPostAlbumStatusPathParams:
    album_id: int = field(default=None, metadata={'path_param': { 'field_name': 'albumId', 'style': 'simple', 'explode': False }})
    
class UserAPIPostAlbumStatusCollectionStatusEnum(str, Enum):
    NOTHING = "Nothing"
    WISHLISTED = "Wishlisted"
    ORDERED = "Ordered"
    OWNED = "Owned"

class UserAPIPostAlbumStatusMediaTypeEnum(str, Enum):
    PHYSICAL_DISC = "PhysicalDisc"
    DIGITAL_DOWNLOAD = "DigitalDownload"
    OTHER = "Other"


@dataclass
class UserAPIPostAlbumStatusQueryParams:
    collection_status: UserAPIPostAlbumStatusCollectionStatusEnum = field(default=None, metadata={'query_param': { 'field_name': 'collectionStatus', 'style': 'form', 'explode': True }})
    media_type: UserAPIPostAlbumStatusMediaTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'mediaType', 'style': 'form', 'explode': True }})
    rating: int = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIPostAlbumStatusRequest:
    path_params: UserAPIPostAlbumStatusPathParams = field(default=None)
    query_params: UserAPIPostAlbumStatusQueryParams = field(default=None)
    

@dataclass
class UserAPIPostAlbumStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_api_post_album_status_200_application_json_string: Optional[str] = field(default=None)
    user_api_post_album_status_200_application_javascript_string: Optional[str] = field(default=None)
    user_api_post_album_status_200_application_jsonp_string: Optional[str] = field(default=None)
    user_api_post_album_status_200_application_xml_string: Optional[str] = field(default=None)
    user_api_post_album_status_200_text_json_string: Optional[str] = field(default=None)
    user_api_post_album_status_200_text_javascript_string: Optional[str] = field(default=None)
    user_api_post_album_status_200_text_xml_string: Optional[str] = field(default=None)
    
