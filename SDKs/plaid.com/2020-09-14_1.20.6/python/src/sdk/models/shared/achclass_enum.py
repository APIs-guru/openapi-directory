from dataclasses import dataclass, field
from typing import Enum

class AchClassEnum(str, Enum):
    ARC = "arc"
    CBR = "cbr"
    CCD = "ccd"
    CIE = "cie"
    COR = "cor"
    CTX = "ctx"
    IAT = "iat"
    MTE = "mte"
    PBR = "pbr"
    POP = "pop"
    POS = "pos"
    PPD = "ppd"
    RCK = "rck"
    TEL = "tel"
    WEB = "web"

