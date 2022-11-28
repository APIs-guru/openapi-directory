import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GovernmentDepartment } from "./governmentdepartment";



export class AnsweringBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: GovernmentDepartment;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}
