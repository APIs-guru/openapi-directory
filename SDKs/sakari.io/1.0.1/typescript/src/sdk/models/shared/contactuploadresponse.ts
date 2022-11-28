import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";



export class ContactUploadResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: Contact })
  contacts?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Contact })
  errors?: Contact[];

  @SpeakeasyMetadata({ data: "json, name=inserted" })
  inserted?: number;

  @SpeakeasyMetadata({ data: "json, name=submitted" })
  submitted?: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: number;
}


export class ContactUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ContactUploadResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
