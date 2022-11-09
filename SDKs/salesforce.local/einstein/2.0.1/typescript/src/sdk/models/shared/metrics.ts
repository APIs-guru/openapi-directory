import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Metrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=metricsData" })
  metricsData?: Map<string, any>;

  @Metadata({ data: "json, name=object" })
  object?: string;
}
