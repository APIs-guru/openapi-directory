import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ControllersFilterData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=op" })
  op?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
