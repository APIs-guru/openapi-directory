import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=target" })
  target?: string[];
}
