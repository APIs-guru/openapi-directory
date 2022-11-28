import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Metrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=metricsData" })
  metricsData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}
