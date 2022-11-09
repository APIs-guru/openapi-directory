import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorResponseContentBase } from "./errorresponsecontentbase";


export class ErrorResponseContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.ErrorResponseContentBase })
  errors?: ErrorResponseContentBase[];

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
