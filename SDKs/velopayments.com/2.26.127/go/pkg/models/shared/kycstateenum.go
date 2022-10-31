package shared




type KycStateEnum string

const (
    KycStateEnumFailedKyc KycStateEnum = "FAILED_KYC"
KycStateEnumPassedKyc KycStateEnum = "PASSED_KYC"
KycStateEnumRequiresKyc KycStateEnum = "REQUIRES_KYC"
)


