from dataclasses import dataclass, field
from typing import Enum

class PlaceFieldsParameterEnum(str, Enum):
    ID = "id"
    NAME = "name"
    COUNTRY_CODE = "country_code"
    PLACE_TYPE = "place_type"
    FULL_NAME = "full_name"
    COUNTRY = "country"
    CONTAINED_WITHIN = "contained_within"
    GEO = "geo"

