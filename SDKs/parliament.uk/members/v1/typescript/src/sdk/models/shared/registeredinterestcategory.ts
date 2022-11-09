import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegisteredInterest } from "./registeredinterest";


export class RegisteredInterestCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=interests", elemType: shared.RegisteredInterest })
  interests?: RegisteredInterest[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
