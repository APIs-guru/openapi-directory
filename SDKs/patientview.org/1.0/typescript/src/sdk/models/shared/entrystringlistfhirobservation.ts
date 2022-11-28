import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FhirObservation } from "./fhirobservation";



export class EntryStringListFhirObservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FhirObservation })
  key?: FhirObservation[];
}
