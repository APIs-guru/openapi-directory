import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAliasesModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliases" })
  aliases?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastId" })
  lastId?: string;
}
