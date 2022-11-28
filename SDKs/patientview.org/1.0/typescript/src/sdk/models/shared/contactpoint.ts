import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactPointType } from "./contactpointtype";



export class ContactPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactPointType" })
  contactPointType?: ContactPointType;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;
}
