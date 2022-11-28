import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";



export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: Metric })
  metrics?: Metric[];

  @SpeakeasyMetadata({ data: "json, name=puid" })
  puid?: string;

  @SpeakeasyMetadata({ data: "json, name=requestPath" })
  requestPath?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=routing" })
  routing?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, any>;
}
