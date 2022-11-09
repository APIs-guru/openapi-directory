import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayCodePayCodeNominalCode
/** 
 * The pay codes' nominal code
**/
export class PayCodePayCodeNominalCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum PayCodePayCodeRegionEnum {
    NotSet = "NotSet"
,    England = "England"
,    Scotland = "Scotland"
,    Wales = "Wales"
}

export enum PayCodePayCodeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}

export enum PayCodePayCodeTypeEnum {
    NotSet = "NotSet"
,    Payment = "Payment"
,    Deduction = "Deduction"
}


export class PayCodePayCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Benefit" })
  benefit?: boolean;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @Metadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @Metadata({ data: "json, name=Niable" })
  niable?: boolean;

  @Metadata({ data: "json, name=NominalCode" })
  nominalCode?: PayCodePayCodeNominalCode;

  @Metadata({ data: "json, name=NonArrestable" })
  nonArrestable?: boolean;

  @Metadata({ data: "json, name=Notional" })
  notional?: boolean;

  @Metadata({ data: "json, name=Readonly" })
  readonly?: boolean;

  @Metadata({ data: "json, name=Region" })
  region?: PayCodePayCodeRegionEnum;

  @Metadata({ data: "json, name=Revision" })
  revision?: number;

  @Metadata({ data: "json, name=Taxable" })
  taxable?: boolean;

  @Metadata({ data: "json, name=Territory" })
  territory?: PayCodePayCodeTerritoryEnum;

  @Metadata({ data: "json, name=Type" })
  type?: PayCodePayCodeTypeEnum;
}


export class PayCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayCode" })
  payCode?: PayCodePayCode;
}
