import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChangeOpEnum {
    Add = "add"
,    Remove = "remove"
,    Replace = "replace"
,    Move = "move"
,    Copy = "copy"
,    Test = "test"
}


// Change
/** 
 * This class defines the Changes on the Publish API
**/
export class Change extends SpeakeasyBase {
  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=op" })
  op: ChangeOpEnum;

  @Metadata({ data: "json, name=path" })
  path: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
