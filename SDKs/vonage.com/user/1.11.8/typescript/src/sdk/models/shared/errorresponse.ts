import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
