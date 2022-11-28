import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatementLinkTypeEnumEnum } from "./statementlinktypeenumenum";



export class LinkedStatements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkDate" })
  linkDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType?: StatementLinkTypeEnumEnum;

  @SpeakeasyMetadata({ data: "json, name=linkedStatementId" })
  linkedStatementId?: number;
}
