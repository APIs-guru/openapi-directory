import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
