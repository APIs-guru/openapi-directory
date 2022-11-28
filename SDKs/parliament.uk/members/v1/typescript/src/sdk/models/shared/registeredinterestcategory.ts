import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegisteredInterest } from "./registeredinterest";



export class RegisteredInterestCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interests", elemType: RegisteredInterest })
  interests?: RegisteredInterest[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
