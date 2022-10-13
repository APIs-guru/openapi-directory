from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class UserAPIGetSongRatingPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    song_id: int = field(default=None, metadata={'path_param': { 'field_name': 'songId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIGetSongRatingRequest:
    path_params: UserAPIGetSongRatingPathParams = field(default=None)
    
class UserAPIGetSongRating200ApplicationJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRating200ApplicationJsonpEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRating200TextJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclass
class UserAPIGetSongRatingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_api_get_song_rating_200_application_json_string_enum: Optional[UserAPIGetSongRating200ApplicationJSONEnum] = field(default=None)
    user_api_get_song_rating_200_application_jsonp_string_enum: Optional[UserAPIGetSongRating200ApplicationJsonpEnum] = field(default=None)
    user_api_get_song_rating_200_text_json_string_enum: Optional[UserAPIGetSongRating200TextJSONEnum] = field(default=None)
    
