import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Group } from "./group";


export class ObservationHeadingGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=group" })
  group?: Group;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=panel" })
  panel?: number;

  @Metadata({ data: "json, name=panelOrder" })
  panelOrder?: number;
}
