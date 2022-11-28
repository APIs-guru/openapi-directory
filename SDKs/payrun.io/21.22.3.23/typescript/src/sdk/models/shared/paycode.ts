import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayCodePayCodeNominalCode
/** 
 * The pay codes' nominal code
**/
export class PayCodePayCodeNominalCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum PayCodePayCodeRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}

export enum PayCodePayCodeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}

export enum PayCodePayCodeTypeEnum {
    NotSet = "NotSet",
    Payment = "Payment",
    Deduction = "Deduction"
}


export class PayCodePayCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Benefit" })
  benefit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EffectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetaData" })
  metaData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Niable" })
  niable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=NominalCode" })
  nominalCode?: PayCodePayCodeNominalCode;

  @SpeakeasyMetadata({ data: "json, name=NonArrestable" })
  nonArrestable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Notional" })
  notional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Readonly" })
  readonly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: PayCodePayCodeRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;

  @SpeakeasyMetadata({ data: "json, name=Taxable" })
  taxable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Territory" })
  territory?: PayCodePayCodeTerritoryEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: PayCodePayCodeTypeEnum;
}


export class PayCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayCode" })
  payCode?: PayCodePayCode;
}
