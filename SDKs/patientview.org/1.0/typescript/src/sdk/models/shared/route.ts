import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lookup } from "./lookup";



export class Route extends SpeakeasyBase {
  @SpeakeasyMetadata()
  controller?: string;

  @SpeakeasyMetadata()
  created?: Date;

  @SpeakeasyMetadata()
  displayOrder?: number;

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  lookup?: Lookup;

  @SpeakeasyMetadata()
  templateUrl?: string;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  url?: string;
}
