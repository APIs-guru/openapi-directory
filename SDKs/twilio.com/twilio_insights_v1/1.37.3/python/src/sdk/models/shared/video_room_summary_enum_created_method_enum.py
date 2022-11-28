from dataclasses import dataclass, field
from enum import Enum

class VideoRoomSummaryEnumCreatedMethodEnum(str, Enum):
    SDK = "sdk"
    AD_HOC = "ad_hoc"
    API = "api"

