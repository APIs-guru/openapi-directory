import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Lookup } from "./lookup";


export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=linkType" })
  linkType?: Lookup;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
