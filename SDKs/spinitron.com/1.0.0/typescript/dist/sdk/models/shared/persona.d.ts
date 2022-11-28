import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
export declare class PersonaLinks extends SpeakeasyBase {
    self?: Link;
    shows?: Link[];
}
/**
 * The `Persona` object describes a radio DJ/host. One person can have multiple personas
**/
export declare class Persona extends SpeakeasyBase {
    links?: PersonaLinks;
    bio?: string;
    email?: string;
    id?: number;
    image?: string;
    name?: string;
    since?: number;
    website?: string;
}
