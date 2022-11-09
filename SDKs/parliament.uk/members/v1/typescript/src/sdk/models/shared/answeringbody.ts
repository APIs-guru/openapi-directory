import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GovernmentDepartment } from "./governmentdepartment";


export class AnsweringBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=department" })
  department?: GovernmentDepartment;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=shortName" })
  shortName?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;
}
