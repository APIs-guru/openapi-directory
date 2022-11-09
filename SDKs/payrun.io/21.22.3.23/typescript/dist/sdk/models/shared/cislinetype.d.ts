import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The cis line types' nominal code
**/
export declare class CisLineTypeCisLineTypeNominalCode extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare enum CisLineTypeCisLineTypeTaxTreatmentEnum {
    Taxable = "Taxable",
    NonTaxable = "NonTaxable",
    Notional = "Notional",
    Materials = "Materials"
}
export declare class CisLineTypeCisLineType extends SpeakeasyBase {
    description?: string;
    lineType?: string;
    nominalCode?: CisLineTypeCisLineTypeNominalCode;
    taxTreatment?: CisLineTypeCisLineTypeTaxTreatmentEnum;
}
export declare class CisLineType extends SpeakeasyBase {
    cisLineType?: CisLineTypeCisLineType;
}
