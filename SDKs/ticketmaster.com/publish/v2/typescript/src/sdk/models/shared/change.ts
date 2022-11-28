import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChangeOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace",
    Move = "move",
    Copy = "copy",
    Test = "test"
}


// Change
/** 
 * This class defines the Changes on the Publish API
**/
export class Change extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=op" })
  op: ChangeOpEnum;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
