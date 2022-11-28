import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";



export class ContactsResponseError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ContactsResponsePagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: number;
}


export class ContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Contact })
  data?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ContactsResponseError;

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: ContactsResponsePagination;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
