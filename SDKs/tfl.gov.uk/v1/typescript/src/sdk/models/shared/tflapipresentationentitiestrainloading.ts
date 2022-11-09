import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesTrainLoading extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=line" })
  line?: string;

  @Metadata({ data: "json, name=lineDirection" })
  lineDirection?: string;

  @Metadata({ data: "json, name=naptanTo" })
  naptanTo?: string;

  @Metadata({ data: "json, name=platformDirection" })
  platformDirection?: string;

  @Metadata({ data: "json, name=timeSlice" })
  timeSlice?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
