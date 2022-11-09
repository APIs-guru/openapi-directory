import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metric } from "./metric";


export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics", elemType: shared.Metric })
  metrics?: Metric[];

  @Metadata({ data: "json, name=puid" })
  puid?: string;

  @Metadata({ data: "json, name=requestPath" })
  requestPath?: Map<string, string>;

  @Metadata({ data: "json, name=routing" })
  routing?: Map<string, number>;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, any>;
}
