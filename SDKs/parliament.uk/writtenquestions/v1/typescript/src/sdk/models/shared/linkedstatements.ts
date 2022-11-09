import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatementLinkTypeEnumEnum } from "./statementlinktypeenumenum";


export class LinkedStatements extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkDate" })
  linkDate?: Date;

  @Metadata({ data: "json, name=linkType" })
  linkType?: StatementLinkTypeEnumEnum;

  @Metadata({ data: "json, name=linkedStatementId" })
  linkedStatementId?: number;
}
