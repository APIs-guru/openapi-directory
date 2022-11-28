import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetailedErrorResponseErrorDetailedMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=break" })
  break?: number;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=employee" })
  employee?: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error_msg" })
  errorMsg?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class DetailedErrorResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=detailed_message", elemType: DetailedErrorResponseErrorDetailedMessage })
  detailedMessage?: DetailedErrorResponseErrorDetailedMessage[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DetailedErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error: DetailedErrorResponseError;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
