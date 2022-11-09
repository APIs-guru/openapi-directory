import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LookupType } from "./lookuptype";


export class Lookup extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=descriptionFriendly" })
  descriptionFriendly?: string;

  @Metadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=lookupType" })
  lookupType?: LookupType;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
