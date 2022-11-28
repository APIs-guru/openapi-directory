import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesPassengerFlow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=timeSlice" })
  timeSlice?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
