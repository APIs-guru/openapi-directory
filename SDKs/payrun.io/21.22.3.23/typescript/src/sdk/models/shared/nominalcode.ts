import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NominalCodeNominalCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;
}


export class NominalCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NominalCode" })
  nominalCode?: NominalCodeNominalCode;
}
