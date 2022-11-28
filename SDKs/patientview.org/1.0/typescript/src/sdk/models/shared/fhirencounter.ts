import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { Link } from "./link";
import { FhirObservation } from "./fhirobservation";
import { FhirProcedure } from "./fhirprocedure";



export class FhirEncounter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=encounterType" })
  encounterType?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: Group;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=observations", elemType: FhirObservation })
  observations?: FhirObservation[];

  @SpeakeasyMetadata({ data: "json, name=procedures", elemType: FhirProcedure })
  procedures?: FhirProcedure[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
