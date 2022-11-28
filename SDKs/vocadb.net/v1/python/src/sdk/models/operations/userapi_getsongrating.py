from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class UserAPIGetSongRatingPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    song_id: int = field(metadata={'path_param': { 'field_name': 'songId', 'style': 'simple', 'explode': False }})
    
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
class UserAPIGetSongRatingRequest:
    path_params: UserAPIGetSongRatingPathParams = field()
    

@dataclass
class UserAPIGetSongRatingResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user_api_get_song_rating_200_application_json_string_enum: Optional[UserAPIGetSongRating200ApplicationJSONEnum] = field(default=None)
    user_api_get_song_rating_200_application_jsonp_string_enum: Optional[UserAPIGetSongRating200ApplicationJsonpEnum] = field(default=None)
    user_api_get_song_rating_200_text_json_string_enum: Optional[UserAPIGetSongRating200TextJSONEnum] = field(default=None)
    
