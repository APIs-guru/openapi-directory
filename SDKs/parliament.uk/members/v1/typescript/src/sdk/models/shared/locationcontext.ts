import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LocationContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;
}
