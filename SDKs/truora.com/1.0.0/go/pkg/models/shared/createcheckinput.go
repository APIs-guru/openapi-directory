package shared

import (
"time")


type CreateCheckInputCountryEnum string

const (
    CreateCheckInputCountryEnumAll CreateCheckInputCountryEnum = "ALL"
CreateCheckInputCountryEnumBr CreateCheckInputCountryEnum = "BR"
CreateCheckInputCountryEnumCl CreateCheckInputCountryEnum = "CL"
CreateCheckInputCountryEnumCo CreateCheckInputCountryEnum = "CO"
CreateCheckInputCountryEnumCr CreateCheckInputCountryEnum = "CR"
CreateCheckInputCountryEnumEc CreateCheckInputCountryEnum = "EC"
CreateCheckInputCountryEnumMx CreateCheckInputCountryEnum = "MX"
CreateCheckInputCountryEnumPe CreateCheckInputCountryEnum = "PE"
CreateCheckInputCountryEnumAr CreateCheckInputCountryEnum = "AR"
)



type CreateCheckInputRegionEnum string

const (
    CreateCheckInputRegionEnumDf CreateCheckInputRegionEnum = "DF"
CreateCheckInputRegionEnumAc CreateCheckInputRegionEnum = "AC"
CreateCheckInputRegionEnumAl CreateCheckInputRegionEnum = "AL"
CreateCheckInputRegionEnumAp CreateCheckInputRegionEnum = "AP"
CreateCheckInputRegionEnumAm CreateCheckInputRegionEnum = "AM"
CreateCheckInputRegionEnumBa CreateCheckInputRegionEnum = "BA"
CreateCheckInputRegionEnumCe CreateCheckInputRegionEnum = "CE"
CreateCheckInputRegionEnumEs CreateCheckInputRegionEnum = "ES"
CreateCheckInputRegionEnumGo CreateCheckInputRegionEnum = "GO"
CreateCheckInputRegionEnumMa CreateCheckInputRegionEnum = "MA"
CreateCheckInputRegionEnumMt CreateCheckInputRegionEnum = "MT"
CreateCheckInputRegionEnumMs CreateCheckInputRegionEnum = "MS"
CreateCheckInputRegionEnumMg CreateCheckInputRegionEnum = "MG"
CreateCheckInputRegionEnumPa CreateCheckInputRegionEnum = "PA"
CreateCheckInputRegionEnumPb CreateCheckInputRegionEnum = "PB"
CreateCheckInputRegionEnumPr CreateCheckInputRegionEnum = "PR"
CreateCheckInputRegionEnumPe CreateCheckInputRegionEnum = "PE"
CreateCheckInputRegionEnumPi CreateCheckInputRegionEnum = "PI"
CreateCheckInputRegionEnumRj CreateCheckInputRegionEnum = "RJ"
CreateCheckInputRegionEnumRn CreateCheckInputRegionEnum = "RN"
CreateCheckInputRegionEnumRs CreateCheckInputRegionEnum = "RS"
CreateCheckInputRegionEnumRo CreateCheckInputRegionEnum = "RO"
CreateCheckInputRegionEnumRr CreateCheckInputRegionEnum = "RR"
CreateCheckInputRegionEnumSc CreateCheckInputRegionEnum = "SC"
CreateCheckInputRegionEnumSp CreateCheckInputRegionEnum = "SP"
CreateCheckInputRegionEnumSe CreateCheckInputRegionEnum = "SE"
CreateCheckInputRegionEnumTo CreateCheckInputRegionEnum = "TO"
)



type CreateCheckInputTypeEnum string

const (
    CreateCheckInputTypeEnumPerson CreateCheckInputTypeEnum = "person"
CreateCheckInputTypeEnumVehicle CreateCheckInputTypeEnum = "vehicle"
CreateCheckInputTypeEnumCompany CreateCheckInputTypeEnum = "company"
CreateCheckInputTypeEnumCustomTypeName CreateCheckInputTypeEnum = "custom_type_name"
)


type CreateCheckInput struct {
    BirthCertificate *string `form:"name=birth_certificate"`
    CompanyName *string `form:"name=company_name"`
    Country CreateCheckInputCountryEnum `form:"name=country"`
    DateOfBirth *time.Time `form:"name=date_of_birth"`
    DiplomaticID *string `form:"name=diplomatic_id"`
    DriverLicense *string `form:"name=driver_license"`
    Escrow *string `form:"name=escrow"`
    FirstName *string `form:"name=first_name"`
    ForceCreation *bool `form:"name=force_creation"`
    ForeignID *string `form:"name=foreign_id"`
    IssueDate *time.Time `form:"name=issue_date"`
    LastName *string `form:"name=last_name"`
    LicensePlate *string `form:"name=license_plate"`
    NationalID *string `form:"name=national_id"`
    NativeCountry *string `form:"name=native_country"`
    OwnerDocumentID *string `form:"name=owner_document_id"`
    OwnerDocumentType *string `form:"name=owner_document_type"`
    Passport *string `form:"name=passport"`
    PaymentDate *time.Time `form:"name=payment_date"`
    Pep *string `form:"name=pep"`
    PhoneNumber *string `form:"name=phone_number"`
    ProfessionalCard *string `form:"name=professional_card"`
    Ptp *string `form:"name=ptp"`
    Region *CreateCheckInputRegionEnum `form:"name=region"`
    ReportID *string `form:"name=report_id"`
    StateID *string `form:"name=state_id"`
    TaxID *string `form:"name=tax_id"`
    Type CreateCheckInputTypeEnum `form:"name=type"`
    UserAuthorized *bool `form:"name=user_authorized"`
    VehicleID *string `form:"name=vehicle_id"`
    VerificationCode *string `form:"name=verification_code"`
    Watch *string `form:"name=watch"`
    
}

