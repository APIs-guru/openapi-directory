import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LookupType } from "./lookuptype";



export class Lookup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=descriptionFriendly" })
  descriptionFriendly?: string;

  @SpeakeasyMetadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lookupType" })
  lookupType?: LookupType;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
