import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
export declare class FhirObservation extends SpeakeasyBase {
    applies?: Date;
    bodySite?: string;
    comments?: string;
    comparator?: string;
    diagram?: string;
    group?: Group;
    id?: number;
    identifier?: string;
    location?: string;
    name?: string;
    temporaryUuid?: string;
    units?: string;
    value?: string;
}
