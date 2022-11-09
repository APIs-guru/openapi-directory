import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Feature } from "./feature";


export class GroupFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=feature" })
  feature?: Feature;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;
}
