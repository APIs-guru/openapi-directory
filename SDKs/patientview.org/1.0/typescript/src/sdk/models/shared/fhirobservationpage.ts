import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryLongMapStringListFhirObservation } from "./entrylongmapstringlistfhirobservation";



export class FhirObservationPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EntryLongMapStringListFhirObservation })
  data?: EntryLongMapStringListFhirObservation[];

  @SpeakeasyMetadata()
  totalElements?: number;

  @SpeakeasyMetadata()
  totalPages?: number;
}
