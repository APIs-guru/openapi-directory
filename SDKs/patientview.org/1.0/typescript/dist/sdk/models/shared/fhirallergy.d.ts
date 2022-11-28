import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
export declare class FhirAllergy extends SpeakeasyBase {
    confidenceLevel?: string;
    group?: Group;
    id?: number;
    identifier?: string;
    infoSource?: string;
    reaction?: string;
    recordedDate?: Date;
    status?: string;
    substance?: string;
    type?: string;
}
