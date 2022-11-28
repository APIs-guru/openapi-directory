import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DataItemParentIdent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentValueIdent" })
  parentValueIdent?: string;

  @SpeakeasyMetadata({ data: "json, name=parentVariableIdent" })
  parentVariableIdent?: string;
}


export class DataItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ident" })
  ident?: string;

  @SpeakeasyMetadata({ data: "json, name=parentIdent" })
  parentIdent?: DataItemParentIdent;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
