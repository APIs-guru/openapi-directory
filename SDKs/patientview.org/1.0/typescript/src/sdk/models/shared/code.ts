import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeCategory } from "./codecategory";
import { Lookup } from "./lookup";
import { CodeExternalStandard } from "./codeexternalstandard";
import { Link } from "./link";


export enum CodeSourceTypeEnum {
    Patientview = "PATIENTVIEW",
    NhsChoices = "NHS_CHOICES"
}


export class Code extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=codeCategories", elemType: CodeCategory })
  codeCategories?: CodeCategory[];

  @SpeakeasyMetadata({ data: "json, name=codeType" })
  codeType?: Lookup;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=externalStandards", elemType: CodeExternalStandard })
  externalStandards?: CodeExternalStandard[];

  @SpeakeasyMetadata({ data: "json, name=fullDescription" })
  fullDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=hideFromPatients" })
  hideFromPatients?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=patientFriendlyName" })
  patientFriendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=removedExternally" })
  removedExternally?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: CodeSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=standardType" })
  standardType?: Lookup;
}
