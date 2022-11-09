import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ErrorResponseDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
