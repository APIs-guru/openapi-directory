import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommandType extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;
}
