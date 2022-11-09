import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contact } from "./contact";
import { Contact } from "./contact";


export class ContactUploadResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts", elemType: shared.Contact })
  contacts?: Contact[];

  @Metadata({ data: "json, name=errors", elemType: shared.Contact })
  errors?: Contact[];

  @Metadata({ data: "json, name=inserted" })
  inserted?: number;

  @Metadata({ data: "json, name=submitted" })
  submitted?: number;

  @Metadata({ data: "json, name=success" })
  success?: number;

  @Metadata({ data: "json, name=updated" })
  updated?: number;
}


export class ContactUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: ContactUploadResponseData;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
