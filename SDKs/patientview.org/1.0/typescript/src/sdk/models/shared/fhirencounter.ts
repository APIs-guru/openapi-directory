import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Group } from "./group";
import { Link } from "./link";
import { FhirObservation } from "./fhirobservation";
import { FhirProcedure } from "./fhirprocedure";


export class FhirEncounter extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=encounterType" })
  encounterType?: string;

  @Metadata({ data: "json, name=group" })
  group?: Group;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=observations", elemType: shared.FhirObservation })
  observations?: FhirObservation[];

  @Metadata({ data: "json, name=procedures", elemType: shared.FhirProcedure })
  procedures?: FhirProcedure[];

  @Metadata({ data: "json, name=status" })
  status?: string;
}
