import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAliasesModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliases" })
  aliases?: string[];

  @Metadata({ data: "json, name=lastId" })
  lastId?: string;
}
