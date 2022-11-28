import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Feature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
