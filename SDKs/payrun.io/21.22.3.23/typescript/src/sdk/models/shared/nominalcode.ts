import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NominalCodeNominalCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;
}


export class NominalCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=NominalCode" })
  nominalCode?: NominalCodeNominalCode;
}
