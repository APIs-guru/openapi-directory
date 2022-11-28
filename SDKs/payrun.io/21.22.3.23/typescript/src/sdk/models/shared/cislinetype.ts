import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CisLineTypeCisLineTypeNominalCode
/** 
 * The cis line types' nominal code
**/
export class CisLineTypeCisLineTypeNominalCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum CisLineTypeCisLineTypeTaxTreatmentEnum {
    Taxable = "Taxable",
    NonTaxable = "NonTaxable",
    Notional = "Notional",
    Materials = "Materials"
}


export class CisLineTypeCisLineType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LineType" })
  lineType?: string;

  @SpeakeasyMetadata({ data: "json, name=NominalCode" })
  nominalCode?: CisLineTypeCisLineTypeNominalCode;

  @SpeakeasyMetadata({ data: "json, name=TaxTreatment" })
  taxTreatment?: CisLineTypeCisLineTypeTaxTreatmentEnum;
}


export class CisLineType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CisLineType" })
  cisLineType?: CisLineTypeCisLineType;
}
