import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ValidatePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=suggestions" })
  suggestions?: string[];

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=warning" })
  warning?: string;
}
