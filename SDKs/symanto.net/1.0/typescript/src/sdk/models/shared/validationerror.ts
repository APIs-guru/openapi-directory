import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loc" })
  loc: string[];

  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
