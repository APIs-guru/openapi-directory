import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";



export class UserFeature extends SpeakeasyBase {
  @SpeakeasyMetadata()
  created?: Date;

  @SpeakeasyMetadata()
  feature?: Feature;

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  lastUpdate?: Date;

  @SpeakeasyMetadata()
  optInDate?: Date;

  @SpeakeasyMetadata()
  optInHidden?: boolean;

  @SpeakeasyMetadata()
  optInStatus?: boolean;

  @SpeakeasyMetadata()
  optOutHidden?: boolean;
}
