import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=isError" })
  isError?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=responseException" })
  responseException?: any;

  @Metadata({ data: "json, name=result" })
  result?: any;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
