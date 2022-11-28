import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pay codes' nominal code
**/
export declare class PayCodePayCodeNominalCode extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare enum PayCodePayCodeRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
export declare enum PayCodePayCodeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
export declare enum PayCodePayCodeTypeEnum {
    NotSet = "NotSet",
    Payment = "Payment",
    Deduction = "Deduction"
}
export declare class PayCodePayCode extends SpeakeasyBase {
    benefit?: boolean;
    code?: string;
    description?: string;
    effectiveDate?: Date;
    metaData?: Map<string, any>;
    niable?: boolean;
    nominalCode?: PayCodePayCodeNominalCode;
    nonArrestable?: boolean;
    notional?: boolean;
    readonly?: boolean;
    region?: PayCodePayCodeRegionEnum;
    revision?: number;
    taxable?: boolean;
    territory?: PayCodePayCodeTerritoryEnum;
    type?: PayCodePayCodeTypeEnum;
}
export declare class PayCode extends SpeakeasyBase {
    payCode?: PayCodePayCode;
}
