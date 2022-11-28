import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesTrainLoading extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: string;

  @SpeakeasyMetadata({ data: "json, name=lineDirection" })
  lineDirection?: string;

  @SpeakeasyMetadata({ data: "json, name=naptanTo" })
  naptanTo?: string;

  @SpeakeasyMetadata({ data: "json, name=platformDirection" })
  platformDirection?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSlice" })
  timeSlice?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
