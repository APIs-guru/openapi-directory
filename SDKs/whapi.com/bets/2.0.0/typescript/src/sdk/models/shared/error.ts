import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Solution } from "./solution";


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=solution" })
  solution?: Solution;
}
