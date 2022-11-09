import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetailedErrorResponseErrorDetailedMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=break" })
  break?: number;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=employee" })
  employee?: number;

  @Metadata({ data: "json, name=end_time" })
  endTime?: string;

  @Metadata({ data: "json, name=error_msg" })
  errorMsg?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class DetailedErrorResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=detailed_message", elemType: shared.DetailedErrorResponseErrorDetailedMessage })
  detailedMessage?: DetailedErrorResponseErrorDetailedMessage[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DetailedErrorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error: DetailedErrorResponseError;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
