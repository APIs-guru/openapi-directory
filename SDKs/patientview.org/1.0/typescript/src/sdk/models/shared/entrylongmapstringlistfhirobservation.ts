import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryStringListFhirObservation } from "./entrystringlistfhirobservation";



export class EntryLongMapStringListFhirObservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EntryStringListFhirObservation })
  key?: EntryStringListFhirObservation[];
}
