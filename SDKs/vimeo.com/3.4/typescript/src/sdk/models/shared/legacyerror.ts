import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LegacyError extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error: string;
}
