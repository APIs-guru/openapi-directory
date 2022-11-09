import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CisLineTypeCisLineTypeNominalCode
/** 
 * The cis line types' nominal code
**/
export class CisLineTypeCisLineTypeNominalCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum CisLineTypeCisLineTypeTaxTreatmentEnum {
    Taxable = "Taxable"
,    NonTaxable = "NonTaxable"
,    Notional = "Notional"
,    Materials = "Materials"
}


export class CisLineTypeCisLineType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LineType" })
  lineType?: string;

  @Metadata({ data: "json, name=NominalCode" })
  nominalCode?: CisLineTypeCisLineTypeNominalCode;

  @Metadata({ data: "json, name=TaxTreatment" })
  taxTreatment?: CisLineTypeCisLineTypeTaxTreatmentEnum;
}


export class CisLineType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CisLineType" })
  cisLineType?: CisLineTypeCisLineType;
}
