import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactPointType } from "./contactpointtype";


export class ContactPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactPointType" })
  contactPointType?: ContactPointType;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;
}
