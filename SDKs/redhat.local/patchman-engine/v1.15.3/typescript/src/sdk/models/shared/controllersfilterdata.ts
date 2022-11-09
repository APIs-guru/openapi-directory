import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersFilterData extends SpeakeasyBase {
  @Metadata({ data: "json, name=op" })
  op?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
