import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Group } from "./group";


export class FhirObservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=applies" })
  applies?: Date;

  @Metadata({ data: "json, name=bodySite" })
  bodySite?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=comparator" })
  comparator?: string;

  @Metadata({ data: "json, name=diagram" })
  diagram?: string;

  @Metadata({ data: "json, name=group" })
  group?: Group;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=temporaryUuid" })
  temporaryUuid?: string;

  @Metadata({ data: "json, name=units" })
  units?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
