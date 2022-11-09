import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contact } from "./contact";


export class ContactsResponseError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ContactsResponsePagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class ContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Contact })
  data?: Contact[];

  @Metadata({ data: "json, name=error" })
  error?: ContactsResponseError;

  @Metadata({ data: "json, name=pagination" })
  pagination?: ContactsResponsePagination;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
