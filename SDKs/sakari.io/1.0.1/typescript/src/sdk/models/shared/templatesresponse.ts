import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";



export class TemplatesResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class TemplatesResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class TemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Template })
  data?: Template[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: TemplatesResponseError;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: TemplatesResponsePagination;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
