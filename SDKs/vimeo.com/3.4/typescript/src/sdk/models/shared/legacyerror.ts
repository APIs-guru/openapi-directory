import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LegacyError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: string;
}
