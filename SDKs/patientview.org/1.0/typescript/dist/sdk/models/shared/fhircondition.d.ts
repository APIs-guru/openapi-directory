import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { Link } from "./link";
export declare class FhirCondition extends SpeakeasyBase {
    asserter?: string;
    category?: string;
    code?: string;
    date?: Date;
    description?: string;
    fullDescription?: string;
    group?: Group;
    id?: number;
    identifier?: string;
    links?: Link[];
    notes?: string;
    severity?: string;
    status?: string;
}
