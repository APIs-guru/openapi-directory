import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=msg" })
  msg?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
