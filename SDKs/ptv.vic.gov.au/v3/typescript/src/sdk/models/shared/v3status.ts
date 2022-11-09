import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3Status extends SpeakeasyBase {
  @Metadata({ data: "json, name=health" })
  health?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
