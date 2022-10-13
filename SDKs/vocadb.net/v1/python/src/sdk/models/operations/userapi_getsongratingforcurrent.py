from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class UserAPIGetSongRatingForCurrentPathParams:
    song_id: int = field(default=None, metadata={'path_param': { 'field_name': 'songId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIGetSongRatingForCurrentRequest:
    path_params: UserAPIGetSongRatingForCurrentPathParams = field(default=None)
    
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
class UserAPIGetSongRatingForCurrentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_api_get_song_rating_for_current_200_application_json_string_enum: Optional[UserAPIGetSongRatingForCurrent200ApplicationJSONEnum] = field(default=None)
    user_api_get_song_rating_for_current_200_application_jsonp_string_enum: Optional[UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum] = field(default=None)
    user_api_get_song_rating_for_current_200_text_json_string_enum: Optional[UserAPIGetSongRatingForCurrent200TextJSONEnum] = field(default=None)
    
