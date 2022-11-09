import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesPassengerFlow extends SpeakeasyBase {
  @Metadata({ data: "json, name=timeSlice" })
  timeSlice?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
