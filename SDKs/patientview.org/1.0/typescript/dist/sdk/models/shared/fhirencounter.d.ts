import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { Link } from "./link";
import { FhirObservation } from "./fhirobservation";
import { FhirProcedure } from "./fhirprocedure";
export declare class FhirEncounter extends SpeakeasyBase {
    date?: Date;
    encounterType?: string;
    group?: Group;
    id?: number;
    identifier?: string;
    links?: Link[];
    observations?: FhirObservation[];
    procedures?: FhirProcedure[];
    status?: string;
}
