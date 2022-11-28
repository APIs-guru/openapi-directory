import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=overridable" })
  overridable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
