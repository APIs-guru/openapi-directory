import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommandType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
