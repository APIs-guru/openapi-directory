import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Solution } from "./solution";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=solution" })
  solution?: Solution;
}
