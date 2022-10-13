from dataclasses import dataclass, field
from typing import Enum

class TrustProductEvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

