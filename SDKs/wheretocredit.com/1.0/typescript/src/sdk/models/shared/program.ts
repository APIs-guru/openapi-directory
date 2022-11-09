import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Program extends SpeakeasyBase {
  @Metadata({ data: "json, name=airlines" })
  airlines?: string[];

  @Metadata({ data: "json, name=denomination" })
  denomination?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=programName" })
  programName?: string;

  @Metadata({ data: "json, name=tierNames" })
  tierNames?: string[];
}
