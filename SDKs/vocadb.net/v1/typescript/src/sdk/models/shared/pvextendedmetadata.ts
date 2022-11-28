import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PvExtendedMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=json" })
  json?: string;
}
