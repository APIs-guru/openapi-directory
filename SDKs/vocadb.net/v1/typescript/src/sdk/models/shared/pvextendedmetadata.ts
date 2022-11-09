import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PvExtendedMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=json" })
  json?: string;
}
