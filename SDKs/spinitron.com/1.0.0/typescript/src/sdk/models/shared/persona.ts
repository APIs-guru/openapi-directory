import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



export class PersonaLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: Link;

  @SpeakeasyMetadata({ data: "json, name=shows", elemType: Link })
  shows?: Link[];
}


// Persona
/** 
 * The `Persona` object describes a radio DJ/host. One person can have multiple personas
**/
export class Persona extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: PersonaLinks;

  @SpeakeasyMetadata({ data: "json, name=bio" })
  bio?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=since" })
  since?: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
