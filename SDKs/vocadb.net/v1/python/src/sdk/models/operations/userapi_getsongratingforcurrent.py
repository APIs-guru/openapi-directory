from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class UserAPIGetSongRatingForCurrentPathParams:
    song_id: int = field(metadata={'path_param': { 'field_name': 'songId', 'style': 'simple', 'explode': False }})
    
class UserAPIGetSongRatingForCurrent200ApplicationJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"

class UserAPIGetSongRatingForCurrent200TextJSONEnum(str, Enum):
    NOTHING = "Nothing"
    DISLIKE = "Dislike"
    LIKE = "Like"
    FAVORITE = "Favorite"


@dataclass
class UserAPIGetSongRatingForCurrentRequest:
    path_params: UserAPIGetSongRatingForCurrentPathParams = field()
    

@dataclass
class UserAPIGetSongRatingForCurrentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    user_api_get_song_rating_for_current_200_application_json_string_enum: Optional[UserAPIGetSongRatingForCurrent200ApplicationJSONEnum] = field(default=None)
    user_api_get_song_rating_for_current_200_application_jsonp_string_enum: Optional[UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum] = field(default=None)
    user_api_get_song_rating_for_current_200_text_json_string_enum: Optional[UserAPIGetSongRatingForCurrent200TextJSONEnum] = field(default=None)
    
