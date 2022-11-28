import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



export class ObservationHeadingGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: Group;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=panel" })
  panel?: number;

  @SpeakeasyMetadata({ data: "json, name=panelOrder" })
  panelOrder?: number;
}
