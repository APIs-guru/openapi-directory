import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string[];
}
