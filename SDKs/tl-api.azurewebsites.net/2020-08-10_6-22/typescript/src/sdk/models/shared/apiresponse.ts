import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isError" })
  isError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=responseException" })
  responseException?: any;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
