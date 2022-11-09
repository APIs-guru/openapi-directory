import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";
import { Link } from "./link";


export class PersonaLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: Link;

  @Metadata({ data: "json, name=shows", elemType: shared.Link })
  shows?: Link[];
}


// Persona
/** 
 * The `Persona` object describes a radio DJ/host. One person can have multiple personas
**/
export class Persona extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: PersonaLinks;

  @Metadata({ data: "json, name=bio" })
  bio?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=since" })
  since?: number;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
