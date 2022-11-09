import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ErrorNotFoundErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


export class ErrorNotFound extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorNotFoundErrors })
  errors?: ErrorNotFoundErrors[];
}
