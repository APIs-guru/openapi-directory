import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lookup } from "./lookup";



export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType?: Lookup;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
