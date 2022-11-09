import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=loc" })
  loc: string[];

  @Metadata({ data: "json, name=msg" })
  msg: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
