import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DataItemParentIdent extends SpeakeasyBase {
  @Metadata({ data: "json, name=parentValueIdent" })
  parentValueIdent?: string;

  @Metadata({ data: "json, name=parentVariableIdent" })
  parentVariableIdent?: string;
}


export class DataItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ident" })
  ident?: string;

  @Metadata({ data: "json, name=parentIdent" })
  parentIdent?: DataItemParentIdent;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
