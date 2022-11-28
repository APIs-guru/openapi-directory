import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



export class FhirObservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applies" })
  applies?: Date;

  @SpeakeasyMetadata({ data: "json, name=bodySite" })
  bodySite?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: string;

  @SpeakeasyMetadata({ data: "json, name=diagram" })
  diagram?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: Group;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=temporaryUuid" })
  temporaryUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
