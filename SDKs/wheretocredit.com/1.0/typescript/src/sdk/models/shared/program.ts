import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Program extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=airlines" })
  airlines?: string[];

  @SpeakeasyMetadata({ data: "json, name=denomination" })
  denomination?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=programName" })
  programName?: string;

  @SpeakeasyMetadata({ data: "json, name=tierNames" })
  tierNames?: string[];
}
