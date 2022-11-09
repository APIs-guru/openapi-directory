import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ValidatePasswordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=suggestions" })
  suggestions?: string[];

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;

  @Metadata({ data: "json, name=warning" })
  warning?: string;
}
