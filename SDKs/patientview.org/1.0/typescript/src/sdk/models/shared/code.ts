import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CodeCategory } from "./codecategory";
import { Lookup } from "./lookup";
import { CodeExternalStandard } from "./codeexternalstandard";
import { Link } from "./link";
import { Lookup } from "./lookup";

export enum CodeSourceTypeEnum {
    Patientview = "PATIENTVIEW"
,    NhsChoices = "NHS_CHOICES"
}


export class Code extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=codeCategories", elemType: shared.CodeCategory })
  codeCategories?: CodeCategory[];

  @Metadata({ data: "json, name=codeType" })
  codeType?: Lookup;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @Metadata({ data: "json, name=externalStandards", elemType: shared.CodeExternalStandard })
  externalStandards?: CodeExternalStandard[];

  @Metadata({ data: "json, name=fullDescription" })
  fullDescription?: string;

  @Metadata({ data: "json, name=hideFromPatients" })
  hideFromPatients?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=patientFriendlyName" })
  patientFriendlyName?: string;

  @Metadata({ data: "json, name=removedExternally" })
  removedExternally?: boolean;

  @Metadata({ data: "json, name=sourceType" })
  sourceType?: CodeSourceTypeEnum;

  @Metadata({ data: "json, name=standardType" })
  standardType?: Lookup;
}
