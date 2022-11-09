import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Template } from "./template";


export class TemplatesResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class TemplatesResponsePagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class TemplatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Template })
  data?: Template[];

  @Metadata({ data: "json, name=error" })
  error?: TemplatesResponseError;

  @Metadata({ data: "json, name=pagination" })
  pagination?: TemplatesResponsePagination;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
