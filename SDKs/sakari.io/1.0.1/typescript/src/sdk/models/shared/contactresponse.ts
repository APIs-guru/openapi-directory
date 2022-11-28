import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";



export class ContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Contact;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
